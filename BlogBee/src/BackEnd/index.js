const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const { send } = require('process');
const { query } = require('express');

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
        console.log(data.toString());
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
        else
        {
            const { spawn } = require('child_process');
            const pyProg = spawn('python3', ['./AudioToTextconverter.py',videoId]);

            pyProg.stdout.on('data', function(data) {
                text = data.toString();
                myarray =[]
                myarray.push({videoId, title, text})
                res.send(myarray)
                console.log(text);
                let query = "INSERT INTO Blogs (videoId, title, text) VALUES (?, ?, ?)";
                db.query(query,[videoId,title,text]);
    
                // let query2 = "SELECT * FROM Blogs WHERE videoId = ?"
                // db.query(query2,videoId,(err,result2)=>{
                //     res.send(result2);
                // });
            })
            
        }
    });
 
})


//temp video inserting 
app.post('/insertVideos',(req,res)=>{
    console.log("post");
    console.log(req.body);
    req.body.forEach(video => {
        let videoId = video.videoId;
        let title = video.title;
        let videoNo = video.videoNo;
        
        let qr = "INSERT INTO videoInfo (videoId, title, videoNo) VALUES (?, ?, ?)";
        db.query(qr,[videoId, title, videoNo],(err,result)=>{
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
