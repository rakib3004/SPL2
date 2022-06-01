const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const { send } = require('process');

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


//temp python calling method
app.get('/test/:videoId', (req, res) => {
    let videoId = req.params.videoId;
    let qr = `SELECT * FROM Blogs WHERE videoId = ?`;

    db.query(qr,videoId,(err,result)=>{

        if(err)
        {
            console.log(err,'error occured');
        }

        if(result.length>0)
        {
            res.send(result);
        }
        else{
            const { spawn } = require('child_process');
            const pyProg = spawn('python3', ['/Users/muktar/Desktop/SPL2/BlogBee/src/BackEnd/index.py']);

            pyProg.stdout.on('data', function(data) {
                console.log(data.toString());
                res.send(data.toString());
                res.end('end');
            });
        }
    });

    
})




//temp video inserting 
app.post('/videoInfo',(req,res)=>{
    console.log("post");
    console.log(req.body);
    req.body.forEach(video => {
        let videoId = video.videoId;
        let title = video.title;
        let topic = video.topic;
        let rating = video.rating;
        let qr = "INSERT INTO videoInfo (videoId, title, topic, rating) VALUES (?, ?, ?, ?)";
        db.query(qr,[videoId, title, topic, rating],(err,result)=>{
            if(err)
            {
                console.log(err,'errs');
            }
        });
    });
    console.log('successfully inserted videos');        
});


app.listen(3000,()=>{
    console.log('server running......')
});
