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
    database: 'blogbee',
    port:3306
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
app.get('/video/:id',(req,res)=>{

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
 
app.post('/add-video', function (req, res) {
 
    let id = req.body.id;
 
    if (!id) {
        return res.status(400).send({ error:true, message: 'Please provide video' });
    }
 
    dbConn.query("INSERT INTO videos SET ? ", { id: id }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
});
//  Update user with id
app.put('/update-video', function (req, res) {
 
    let id = req.body.id;
    let title = req.body.title;
 
    if (!id || !title) {
        return res.status(400).send({ error: user, message: 'Please provide video & id' });
    }
 
    dbConn.query("UPDATE videos SET title = ? WHERE id = ?", [title, id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
    });
});
//  Delete user
app.delete('/delete-video', function (req, res) {
 
    let id = req.body.id;
 
    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide id' });
    }
    dbConn.query('DELETE FROM videos WHERE id = ?', [id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
    });
}); 

module.exports = app;