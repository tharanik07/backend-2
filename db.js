const mysql = require('mysql2');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"employee",
});

db.connect((err)=>{
    if(err){
        console.log("DB is not connected");
    }
    console.log("DB is connected");
});

module.exports = db;