// var express = require('express');
// var mongoose = require('mongoose');
// var bodyparser = require('body-parser');
// var cors = require('cors');
// var path = require('path');


// var app = express();

// const route = require('./routes/route');

// mongoose.connect('mongodb://localhost:27017/MERN');

// mongoose.connection.on('connected', () => {

//     console.log('Sucessfully connected');

// });

// mongoose.connection.on('error', (err)=>{
//     if(err){
//         console.log('Connection is unsuccessful!'+err);
//     }
// });

// const port = 3000;


// app.use(cors());

// app.use(bodyparser.json())

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {

//     res.send('Ri-Research-Lab--Tarafder-Informatics-Ltd--Techbology-Academy--IEC-R-Foundation');
// });

// app.use('/api', route);



// app.listen(port, () => {
//     console.log('Server started at port' + port)
// });


  
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
    videos: 'root',
    password: '',
    database: 'account',
    port:7070
});

//check database connection
db.connect(err=>{
    if(err) {console.log(err,'dberr');}
    console.log('database connected ...')
})


//get all data
app.get('/videos',(req,res)=>{

    let qr = 'select * from videos';

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result.length>0)
        {
            res.send({
                message:'all videos data',
                data:result
            })
        }
    });
});

//get single data
app.get('/videos/:id',(req,res)=>{

    let gID = req.params.id;

    let qr = `select * from videos where id = ${gID}`;

    db.query(qr,(err,result)=>{

        if(err) {console.log(err,'errs');}

        if(result.length>0)
        {
            res.send({
                message:'get single data',
                data:result
            })
        }
        else
        {
            res.send({
                message:'data not found'
            })
        }
    })
})

app.post('/videos',(req,res)=>{
    console.log(req.body);
});


app.listen(3000,()=>{
    console.log('server running......')
});