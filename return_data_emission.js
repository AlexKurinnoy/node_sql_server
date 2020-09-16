const combine = require('./combine');
const mysqlConnection = require("./connections");
const union = require("./union");


function returnData(req, res){
    if(req.params.id){
        mysqlConnection.query("SELECT tr_par1_id, tr_table FROM table_route where tr_period = " + req.params.id , (err, rows, fields)=>{
            if (!err){
                res.send(union(rows));
            } else {
                console.log(err);
                res.send(err);
            }
        })
    }else{
        mysqlConnection.query("SELECT * FROM "+  req.body.tr_table +  " LIMIT " + req.body.start + "," + req.body.limit , (err, rows, fields)=>{
            if (!err){
                res.send(rows);
            } else {
                console.log(err);
                res.send(err);
            }
        })
    }
}





module.exports = returnData;