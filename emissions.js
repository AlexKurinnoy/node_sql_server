const express = require('express');
const router = express.Router();
const returnData = require('./return_data_emission');
const mysqlConnection = require("./connections");



    router.get("/", (req, res)=>{
        mysqlConnection.query("SELECT tr_period FROM table_route where tr_subject_id = 1" , (err, rows, fields)=> {
            res.send(rows)
        });
    })


    router.get('/:id', (req, res)=>{
        console.log(req.params.id)
        returnData(req, res)
    })

    router.post("/", (req, res)=>{
            returnData(req, res)
    })

module.exports = router;