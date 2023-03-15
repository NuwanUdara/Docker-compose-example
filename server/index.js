const express = require("express");
const mysql = require("mysql2");
const cors = require('cors');

var myuser=  process.env.MY_SQL_USER //|| "root"
var myhost= process.env.MY_SQL_HOST || "localhost"
var myport=  process.env.MY_SQL_PORT //|| "3306"
var mypassword= process.env.MY_SQL_PASS //|| "password"
var mydatabase= process.env.MY_SQL_DATABSE //





const app = express();
app.use(cors())
app.use(express.json())
app.post("/create", (req, res) => {
  try {
    const db = mysql.createConnection({
      user: myuser,
      host: myhost,//myhost,
      password: mypassword,
      database: mydatabase,
      port: 3306
      
    });
    console.log("Got the respose")
    const name = req.body.name;
    const age = req.body.age;
    const quot = req.body.quote;
    db.query("INSERT INTO myquo (name,age,quot) VALUES (?,?,?)", 
    [name, age, quot],(err,result)=> {
      if(err){
        console.log(err);
        res.status(500);
      }
      else{
        res.send("value Insrted").status(200);
      }
    }
  );
    
  } catch (error) {
    res.status(500);
    console.log("The Database is not ready yet")
  }
  
});

app.get('/quote', (req,res) => {
  try {
    const db = mysql.createConnection({
      user: myuser,
      host: myhost,//myhost,
      password: mypassword,
      database: mydatabase,
      port: 3306
      
    });

    db.query('SELECT * FROM myquo',(err,result) => {
      if (err){
        console.log(err);
        res.status(500);
      }
      else{
        console.log(result);
        res.send(result);
      }
    })
    
  } catch (error) {
    res.status(500);
    console.log("The Database is not ready yet")
  }
  
})

app.listen(3001, () => {
  console.log("It's running on 3001");
  console.log(myuser+ ' ' + myhost);
  // db.query('SELECT * FROM myquo',(err,result) => {
  //   if (err){
  //     console.log(err);
  //   }
  //   else{
  //     console.log(result);
  //   }
  // })
});
