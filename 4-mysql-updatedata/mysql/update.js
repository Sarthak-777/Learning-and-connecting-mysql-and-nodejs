let mysql = require('mysql2');
let config = require('../config.js');

let connection = mysql.createConnection(config);

let sql = `UPDATE todos
SET completed = ?
WHERE id = 2`

data = [true, 1]
connection.query(sql,data,(e,result,field)=>{
    if(e){
        console.log(e)
    }
    console.log(`Rows affected ${result.affectedRows}`)
})

connection.end()