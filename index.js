const express = require('express');

const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require("body-parser");
var app = express();

const mysqlConnection = require("./connections");
// const dataRouter = require("./data");
const emissionsRouter = require("./emissions");

const costsRouter = require("./costs");

const port = process.env.PORT || 3903;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/national-emissions", emissionsRouter);
// app.use("/national-emissions/:id", function () {
//     console.log(req.param.id)Server-Side Filtering
// });

app.use("/national-costs", costsRouter);
app.listen(port, function () {
    console.log("СЕРВЕР РАБОТАЕТ НА ПОРТУ:  " + port)
    mysqlConnection.query("SELECT * FROM field_descriptions", (err, rows, fields)=>{
        if (!err){
            global.description = rows.map(el=>{
                el.fd_code = el.fd_code.toLowerCase();
                return {
                    origin: el.fd_code,
                    descript: el.fd_name
                }
            });

        } else {
            return  err;
        }
    })
    mysqlConnection.query("SELECT * FROM substances", (err, rows, fields)=>{
        if (!err){
            global.union = rows.map(el=>{
                return {
                    code: el.ss_code,
                    name: el.ss_name
                }
            });
        } else {
            return  err;
        }
    })


})

