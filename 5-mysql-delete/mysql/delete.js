const config = require('../config')
const mysql = require('mysql2')

const connection = mysql.createConnection(config)

let sql = `DELETE FROM todos WHERE id=?`

let id = 1

connection.query(sql,id,(e,result,field)=>{
    if(e){
        console.log(e)
    }
    console.log('Deleted Row(s): '+result.affectedRows)
})

connection.end()