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
app.get('/userInfo',(req,res)=>{

    let qr = `select * from userInfo`;

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result.length>0)
        {
            res.send({
                message:'all user data',
                data:result
            })
        }
    });
});


app.post('/userInfo',(req,res)=>{
    console.log(req.body);
    let userName = req.body.userName;
    let password = req.body.password;

    let sql = `SELECT * FROM userInfo WHERE name = ? AND password = ?`;
    db.query(sql, [ userName, password ],(err, result)=> {
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

