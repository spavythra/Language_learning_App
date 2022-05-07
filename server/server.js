const express = require('express')
const app = express()
const mysql = require('mysql')
require("dotenv").config()
// console.log(process.env)
// console.log(process.env.USER)
// console.log(process.env)
// console.log(process.env.USERNAME)

let config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multiplestatements: true,
  };



  var connection = mysql.createConnection(config);
  connection.connect();

  // app.use(express.static("client/frontend/build"));

  app.get("/words", (req, res) => {
    connection.query("SELECT * from words", (error, results) => {
      if (error) {
        console.log(error);
        connection.end();
      } else {
        res.send(results);
      }
    });
  });

  

app.listen(8080 , () => {
    console.log("port 8080")
})