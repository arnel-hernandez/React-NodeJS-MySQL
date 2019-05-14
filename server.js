const express = require('express');
var mysql = require('mysql')
const app = express();

const selectAllProducts = 'SELECT * FROM cpu_products';
const selectProduct = 'SELECT * FROM cpu_products where cpu_id = ';

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'desktopninja'
})

connection.connect()

// console.log(connection)

// connection.query(select, function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()

// app.get('/api/customers/add', (req, res) => {
//   const { id, title } = req.query;
//   const insertlist = `INSERT INTO todolist(idtodolist_id, todolist_title) VALUES('${id}', '${title}')`
//   connection.query(insertlist, (err, results) => {
//     if(err) {
//       return res.send(err)
//     }
//     else {
//       return res.send(results)
//     }
// })})

app.get('/products', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log('reading data');

  connection.query(selectAllProducts, (err, results) => {
    if(err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      });
    }
  })
});

app.get('/product/:id', (req, res) => {
  
  connection.query(selectProduct + req.params.id, (err, results) => {
    if(err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      });
    }
  })
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);