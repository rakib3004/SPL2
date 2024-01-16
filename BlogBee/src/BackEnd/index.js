const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const { send } = require('process');
const { query } = require('express');
const { clear } = require('console');
const fs = require('fs');
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(cors());
app.use(bodyparser.json());


//database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blogbee',
    port:3306
});

//check database connection
db.connect(err=>{
    if(err) {console.log(err,'dberr');}
    console.log('database connected ...')
})


//post singup data into database

app.post('/signup',(req,res)=>{
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;

    let qr = `SELECT * FROM users WHERE userName = ? or email = ?`;

    db.query(qr,[userName,email],(err,result)=>{
        if(err){
            console.log(err,'errs');
        }

        if(result.length>0){
            res.send(false);
        }
        else{  
            bcrypt.hash(password, saltRounds).then(function(hash) {
                // Store hash in your password DB.
                let qr = "INSERT INTO users (userName, email, password) VALUES (?, ?, ?)";
                db.query(qr,[userName,email,hash]);
                res.send(true);
            });           
            
        }
    });
});

//post login data
app.post('/signin',(req,res1)=>{
    let userName = req.body.userName;
    let password = req.body.password;

    let qr = "SELECT password, userName FROM users WHERE userName = ?";

    db.query(qr,userName,(err,res)=>{
        if(res && res.length>0){
            bcrypt.compare(password, res[0].password).then(function(result) {
                if(result==true) res1.send(res);
                else res1.send(false);
            });
        }
        else{
            res1.send(false);
        }
    })
});


//add new rating data
app.post('/rating',(req,result)=>{
    console.log(req.body);
    let userNo = req.body.userNo;
    let rating = req.body.rating;
    let videoId = req.body.videoId;
    let timestamp = req.body.timeStamp;

    let qr = "SELECT * FROM Users WHERE userNo=?";
    db.query(qr,userNo,(err1,res1)=>{
        if(res1.length>0){
                let email = res1[0].email;
                db.query("SELECT videoNo FROM videoInfo WHERE videoId = ?",videoId,(err,res2)=>{
                if(res2.length>0){
                    let videoNo = res2[0].videoNo;
                    let qr1 = "INSERT INTO RatingData (email, userNo, videoId, videoNo, rating, timestamp) VALUES (?, ?, ?, ?, ?, ?)";
                    db.query(qr1,[email, userNo, videoId, videoNo, rating, timestamp],(err,res3)=>{
                        result.send(res3);
                    },err=>{console.log(err)});
                }
            })
        }
    })

 })

//get Favourite List
app.get('/favouriteList/:userNo',(req,result)=>{
    let userNo = req.params.userNo;
    let qr = "SELECT * FROM FavouriteList where userNo=?";
    db.query(qr,userNo,(err,res)=>{
        if(err) console.log(err);
        if(res.length>0){
            result.send(res);
        }
    })
})

//add to favourite list
app.post('/favourite',(req,result)=>{
    let videoId = req.body.videoId;
    let userNo = req.body.userNo;
    let title = req.body.title;

    let qr = "Select * from FavouriteList where userNo=? and videoId=?";
    db.query(qr,[userNo,videoId],(err,res)=>{

        if(res.length>0){
            result.send(false);
        }
        else{
            db.query("Insert into FavouriteList (userNo,videoId,title) values(?,?,?)",[userNo,videoId,title],(err,res2)=>{
                result.send(res2);
            },err=>{console.log(err)})
        }
    },err=>{console.log(err)})
})

//delete from fav list
app.put('/remove',(req,result)=>{
    console.log("Remove from favlist");
    console.log(req.body);
    let videoId = req.body.videoId;
    let userNo = req.body.userNo;
    let qr = "Delete From FavouriteList Where videoId=? and userNo=?";
    db.query(qr,[videoId,userNo],(err,res)=>{
        result.send(res);
    },err=>{console.log(err)})
})

//get all video data
app.get('/videoInfo',(req,res)=>{
    let qr = "SELECT * from videoInfo";
    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err,'errs');
        }
        res.send(result);
    });
});

//recommendation algorithm 
app.get('/recommendation/:userId',(req,res)=>{
    let userId = req.params.userId;
   
    const { spawn } = require('child_process');
    const pyProg = spawn('python3', ['./recommendationSystem.py',userId]);

    pyProg.stdout.on('data', function(data) {
        return res.send(data.toString());
    })
})

//classify text
app.get('/classify/:text',(req,res)=>{
    let text = req.params.text;
    console.log(text);

    const { spawn } = require('child_process');
    const pyProg = spawn('python3', ['./ClassifyText.py']);

    pyProg.stdout.on('data', function(data) {
        console.log(data.toString());
        return res.send(data.toString());
    })
})


//temp python calling method
app.post('/blog', (req, res) => {

    let videoId = req.body.videoId;
    let title = req.body.title;
    let text = "";

    // let qr = `SELECT * FROM Blogs WHERE videoId = ?`;

    // db.query(qr,videoId,(err,result)=>{
    //     if(err){
    //         console.log(err,'error occured');
    //     }

    //     if(result.length<0){
    //         //fs.writeFile('./File.txt',result.toString(), err => {if (err) {console.error(err);}});
    //         return res.send(result);
    //     }
    //     else{
            const { spawn } = require('child_process');
            const pyProg = spawn('python3', ['./AudioToTextconverter.py',videoId]);

            pyProg.stdout.on('data', function(data) {
                text = data.toString();
                console.log(text)
                myarray = [];
                myarray.push({videoId, title, text})
                res.send(myarray);

                // let query = "INSERT INTO Blogs (videoId, title, text) VALUES (?, ?, ?)";
                // db.query(query,[videoId,title,text]);
                // clear(myarray);
            })
            
        // }
    // });
 
})


//temp video inserting 
app.post('/insertRatings',(req,res)=>{
    console.log("post");
    console.log(req.body);
    req.body.forEach(user => {
        let userName = user.name;
        let userId = user.userId;
        let email = user.email;
        let password = user.password;
        
        
        let qr = "INSERT INTO userInfo (userName, userId, email, password) VALUES (?, ?, ?, ?)";
        db.query(qr,[userName, userId, email, password],(err,result)=>{
            if(err)
            {
                console.log(err,'errs');
            }
        });
    });
    console.log('successfully inserted RatingData');        
});


app.listen(3000,()=>{
    console.log('server running......');
});