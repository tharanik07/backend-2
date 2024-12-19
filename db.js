const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_host ||"localhost",
    user:process.env.DB_user ||"root",
    password:process.env.DB_password || "QWpMrSHIOT7PjnKS7UIr",
    database:process.env.DB_database ||"employee",
});

db.connect((err)=>{
    if(err){
        console.log("DB is not connected");
    }
    console.log("DB is connected");
});

module.exports = db;