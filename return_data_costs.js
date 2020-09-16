const combine = require('./combine');
const mysqlConnection = require("./connections");


function returnData(req, res){
   // mysqlConnection.query("SELECT tr_table FROM table_route were tr_period = " + req.body.tr_period + " LIMIT " + req.body.start + "," + req.body.limit , (err, rows, fields)=>{
    mysqlConnection.query("SELECT * FROM " + req.body.tr_table  + " LIMIT " + req.body.start + "," + req.body.limit , (err, rows, fields)=>{
        if (!err){
            rows = rows.map( (el)=>{ return Object.keys(el).reduce((c, k) => (c[k.toLowerCase()] = el[k], c), {})})
            res.send(combine( rows, global.description));
        } else {
            console.log(err);
            res.send(err);
        }
    })
}





module.exports = returnData;