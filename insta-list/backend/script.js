var express = require('express');
var mysql = require('mysql');
var app = express();
var cors = require('cors');
//This file is node.js/express and we use this to talk to our database. 
app.use(cors())
var connection = mysql.createPool({
    connectionLimit: 50, //server only handles 50 SQL queries
    host: 'localhost',
    user: 'root',
    password: 'Richmondhill1',
    database: 'project1'
});

app.get('/', function(req, resp) {
    connection.getConnection(function(error, tempCont) {
        if (!!error) {
            tempCont.release();
            console.log('Error');
        } else {
            console.log('connected!'); 
            tempCont.query("SELECT * FROM artist", function(error, rows, fields) {
                tempCont.release();
                if(!!error) {
                    console.log("Error in getting the query");
                } else {
                    console.log("Sucessful Query");
                    console.log(rows);
                    resp.json(rows);
                  }
            });
        }
    });
});

app.listen(8888);
