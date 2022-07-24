const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.json({type: 'applicaton/json'}));
app.use(bodyParser.urlencoded({extended: true}));

var con = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'pwd1!',
  database: 'scrapingdata',
});

var server = app.listen(4548, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('start');
});

con.connect(function (error) {
  if (error) console.log(error);
  else console.log('connected');
});

app.get('/books', (req, res) => {
  con.query('select * from books', (error, rows, fields) => {
    if (error) console.log(error);
    else {
      console.log(rows);
      res.send(rows);
    }
  });
});
