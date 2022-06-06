const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const { send } = require('process');
const { query } = require('express');
const { clear } = require('console');

const app = express();

app.use(cors());
app.use(bodyparser.json());


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
app.post('/signup',(req,res)=>{
    let userName = req.body.userName;

    let qr = `SELECT * FROM userInfo WHERE name = ?`;

    db.query(qr,userName,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result.length>0)
        {
            res.send(result);
        }
        else
        { 
            let name = req.body.userName;
            let email = req.body.email;
            let password = req.body.password;
            let qr = "INSERT INTO userInfo (name, email, password) VALUES (?, ?, ?)";
            db.query(qr,[name,email,password],(err,result)=>{

            });

            console.log("HI");
        }
    });
});

//post login data
app.post('/login',(req,res)=>{
    console.log(req.body);
    let userName = req.body.userName;
    let password = req.body.password;

    let qr = `SELECT * FROM userInfo WHERE name = ? AND password = ?`;
    db.query(qr, [ userName, password ],(err, result)=> {
    if(err)
    {
        console.log(err,'errs');
    }
    res.send(result);

    });
});


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
        //console.log(data.toString());
        // myarray =[]
        // myarray.push({videoId, title, text})
        return res.send(data.toString());
    })
})


//video to blog converter using python file
// app.get('/test/:videoId/:title',(req,res)=>{
//     let videoId = req.params.videoId;
//     let title = req.params.title;
//     let text = "";
//     const { spawn } = require('child_process');
//     const pyProg = spawn('python3', ['./AudioToTextconverter.py',videoId]);

//     pyProg.stdout.on('data', function(data) {
//         text = data.toString();
//         myarray =[]
//         myarray.push({videoId, title, text})
//         return res.send(myarray)
//     })
// })



//temp python calling method
app.get('/test/:videoId/:title', (req, res) => {


    let videoId = req.params.videoId;
    let title = req.params.title;
    let text = "";
    console.log(videoId)

    let qr = `SELECT * FROM Blogs WHERE videoId = ?`;

    db.query(qr,videoId,(err,result)=>{

        if(err)
        {
            console.log(err,'error occured');
        }

        if(result.length>0)
        {
            return res.send(result);
        }
        else
        {
            console.log("here")
            const { spawn } = require('child_process');
            const pyProg = spawn('python3', ['/Users/muktar/Desktop/SPL2/BlogBee/src/BackEnd/AudioToTextconverter.py',videoId]);

            pyProg.stdout.on('data', function(data) {
                console.log("here2")
                text = data.toString();
                console.log(data.toString())
                //myarray =[{videoId:string ="",title:string="",text:string=""}]
                myarray = [];
                myarray.push({videoId, title, text})
                console.log(text);
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
