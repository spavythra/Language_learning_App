const express = require('express')
const app = express()
const mysql = require('mysql')


let config = {
    host: "mydb.tamk.fi",
    user: process.env.DB_USER,
    password: process.env.PASSWROD,
    database: process.env.DB_DB,
    multiplestatements: true,
  };


  var connection = mysql.createConnection(config);
  connection.connect();

  app.use(express.static("client/frontend/build"));

  app.get("/words", (req, res) => {
    connection.query("SELECT * from words", (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.send(results);
      }
    });
  });

app.listen(8080 , () => {
    console.log("server up and running on port 8080")
})
connection.end();
