require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
//const mysql=require('mysql')
const conn = require("express-myconnection");
const route = require("./routes/index");

const app = express();
const PORT = process.env.PORT ;
const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME ,
};

app.use(conn(mysql, dbConfig, "single"));

/*
const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port:process.env.DB_PORT,
  database: process.env.DB_NAME
});

conexion.connect((err)=>{
  if(err){
      console.log('ha ocurrido un error :'+ err)
  }
  else
  {console.log(' la base de datos se conecto!!!')}
});*/



app.use(express.json());
app.use("/", route);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
