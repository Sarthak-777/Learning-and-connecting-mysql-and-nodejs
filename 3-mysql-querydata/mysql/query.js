let mysql = require('mysql2');
let config = require('../config.js');

let connection = mysql.createConnection(config);

let id = process.argv[2]
let sql = `SELECT * FROM todos WHERE completed = `+mysql.escape(id)

connection.query(sql,(error, result, field)=>{
    if(error){
        console.log(error)
    }
    console.log(result)
})

connection.end()