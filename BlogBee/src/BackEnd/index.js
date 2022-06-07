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
//app.use(session({secret: "B:=<[X<wbb<ZGr7-"}))


//database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'BlogBee',
    port:3306
});

//check database connection
db.connect(err=>{
    if(err) {console.log(err,'dberr');}
    console.log('database connected ...')
})


//post singup data into database
app.post('/signupUsers',(req,res)=>{
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
app.post('/login',(req,res1)=>{
    let userName = req.body.userName;
    let password = req.body.password;

    let qr = `SELECT password, userId FROM users WHERE userName = ?`;

    db.query(qr,userName,(err,res)=>{
        console.log(res[0].password,res[0].userId);
        if(res.length>0){
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

    db.query("SELECT userId FROM users WHERE userNo = ?",userNo, (err,res1)=>{
        let userId = res1[0].userId.toString();
        db.query("SELECT videoNo FROM videoInfo WHERE videoId = ?",videoId,(err,res2)=>{
            let videoNo = res2[0].videoNo;
            let qr1 = "INSERT INTO RatingData (userId, userNo, videoId, videoNo, rating, timestamp) VALUES (?, ?, ?, ?, ?, ?)";
            db.query(qr1,[userId, userNo, videoId, videoNo, rating, timestamp],(err,res3)=>{

            });
        })
    })
})

//add to favourite list
app.post('/favourite',(req,result)=>{
    console.log(req.body);
    let videoId = req.body.videoId;
    let userNo = req.body.userNo;
    let qr = "Select * from FavouriteList where userNo=? and videoId=?";
    db.query(qr,[userNo,videoId],(err,res)=>{
        if(res.length>0){
            result.send(false);
        }
        else{
            db.query("Insert into FavouriteList (userNo,videoId) values(?,?)",[userNo,videoId],(err,res2)=>{
                result.send(true);
            })
        }
    })
})

//get all video data
app.get('/videoInfo',(req,res)=>{
    let qr = "select * from videoInfo";
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
app.get('/classify',(req,res)=>{
    
    const { spawn } = require('child_process');
    const pyProg = spawn('python3', ['./ClassifyText.py']);

    pyProg.stdout.on('data', function(data) {
        console.log(data.toString());
        return res.send(data.toString());
    })
})


//temp python calling method
app.get('/test/:videoId/:title', (req, res) => {

    let videoId = req.params.videoId;
    let title = req.params.title;
    let text = "";

    let qr = `SELECT * FROM Blogs WHERE videoId = ?`;

    db.query(qr,videoId,(err,result)=>{
        if(err){
            console.log(err,'error occured');
        }

        if(result.length>0){
            //fs.writeFile('./File.txt',result.toString(), err => {if (err) {console.error(err);}});
            return res.send(result);
        }
        else{
            const { spawn } = require('child_process');
            const pyProg = spawn('python3', ['/Users/muktar/Desktop/SPL2/BlogBee/src/BackEnd/AudioToTextconverter.py',videoId]);

            pyProg.stdout.on('data', function(data) {
                text = data.toString();
                myarray = [];
                myarray.push({videoId, title, text})
                res.send(myarray);

                let query = "INSERT INTO Blogs (videoId, title, text) VALUES (?, ?, ?)";
                db.query(query,[videoId,title,text]);
                clear(myarray);
            })
            
        }
    });
 
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
    console.log('server running......')
});
