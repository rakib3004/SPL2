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


//get all data
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


app.listen(3000,()=>{
    console.log('server running......')
});

