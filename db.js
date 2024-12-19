const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host:process.env.DB_host||"localhost",
    user:process.env.DB_user||"root",
    password:process.env.DB_password || "",
    database:process.env.DB_database  || "employee",
});

db.connect((err)=>{
    if(err){
        console.log("DB is not connected",err);
    }else{
        console.log("DB is connected");
    }
    
});

module.exports = db;