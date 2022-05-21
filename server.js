const express = require('express')
const app = express()
const mysql = require('mysql') 
const cors = require('cors')
const Connection = require('mysql/lib/Connection')
require("dotenv").config()
// const path = require('path');

var port = process.env.PORT || 8000


app.use(cors());
app.use(express.json());


let config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    multiplestatements: true,
  };



  var connection = mysql.createConnection(config);
  
  app.use(express.static("public"));

  app.post("/admin/add", (req,res) => {
    console.log(req.body)
  const Eng_word = req.body.Eng_word;
  const Fin_word = req.body.Fin_word;

    connection.query("INSERT INTO words (Eng_word,Fin_word) VALUES (?,?)",
    [Eng_word, Fin_word], (err,result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    })
  })

  app.get("/words", (req, res) => {
    connection.query("SELECT * from words", (error, results) => {
      if (error) {
        console.log(error);
        // connection.end();
      } else {
        // res.sendFile(path.resolve(__dirname,  "public", "index.html"));
        res.send(results);
      }
    });
  });

  app.put("/admin/update", (req,res) => {
    const id = req.body.id;
    const Fin_word = req.body.Fin_word;

    connection.query("UPDATE words SET Fin_word = ? WHERE id = ?", 
    [Fin_word,id],
    (err, result) => {
      if(err) {
        console.log(err)
      } else {
        res.send(result)
      }
    })
  })

  app.delete("/admin/delete/:id", (req, res) => {
    const id = req.params.id;
    connection.query("DELETE FROM words WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
 
  

app.listen(port , () => {
    console.log("port 8080")
})