const express = require("express");
const mysql = require("mysql2");
const cors = require('cors');

var myuser=  process.env.MY_SQL_USER
var myhost= process.env.MY_SQL_HOST || "localhost"
var myport=  process.env.MY_SQL_PORT
var mypassword= process.env.MY_SQL_PASS
var mydatabase= process.env.MY_SQL_DATABSE


const db = mysql.createConnection({
  user: myuser,
  host: myhost,//myhost,
  password: mypassword,
  database: mydatabase,
  port: 3306
  
});


const app = express();
app.use(cors())
app.use(express.json())
app.post("/create", (req, res) => {
  console.log("Got the respose")
  const name = req.body.name;
  const age = req.body.age;
  const quot = req.body.quote;
  db.query("INSERT INTO myquo (name,age,quot) VALUES (?,?,?)", 
  [name, age, quot],(err,result)=> {
    if(err){
        console.log(err);
    }
    else{
        res.send("value Insrted").status(200);
    }
  }
  );
});

app.get('/quote', (req,res) => {
  db.query('SELECT * FROM myquo',(err,result) => {
    if (err){
      console.log(err);
    }
    else{
      console.log(result);
      res.send(result);
    }
  })
})

app.listen(3001, () => {
  console.log("It's running on 3001");
  console.log(myuser+ ' ' + myhost);
  db.query('SELECT * FROM myquo',(err,result) => {
    if (err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  })
});
