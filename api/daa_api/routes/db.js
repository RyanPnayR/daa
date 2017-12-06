const mysql = require('mysql');
var express = require('express');
var router = express.Router();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'daaadmin',
  port: 4896,
  password: 'gow3.tree',
  database: 'shop'
});

module.exports.products = router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM products', (err,rows) => {
        if(err) throw err;
        console.log('Data received from Db:\n');
        console.log(rows);
        res.send(rows);
      });
  });
