const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: "192.168.1.109",
    user: "ron",
    password: "-ron*",
    database: "ecoportal",
    multipleStatements: true
});

mysqlConnection.connect(err =>{
    if (!err){
        console.log("Connected to MySql true");
        }
    else{
        console.log("Connection failed");
        }
})

module.exports = mysqlConnection;