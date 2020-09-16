const express = require('express');
const router = express.Router();
const mysqlConnection = require("./connections");
const returnData = require('./return_data_costs');

router.get("/", (req, res)=>{
    mysqlConnection.query("SELECT tr_period, tr_table FROM table_route where tr_subject_id = 2" , (err, rows, fields)=> {
        res.send(rows)
    });
})


router.post("/", (req, res)=>{
    returnData(req, res)

})

module.exports = router;