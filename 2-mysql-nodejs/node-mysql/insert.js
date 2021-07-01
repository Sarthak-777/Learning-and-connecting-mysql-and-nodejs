const config = require('../config')
const mysql = require('mysql2')

const connection = mysql.createConnection(config)

let sql = `INSERT INTO todos(title, completed)
VALUES(?,?)`

let todo = ['TRIPLE KILL', false]

connection.query(sql,todo, (err,results,fields)=>{
    if(err){
        return console.log(err)
    }
    console.log(results.message)
})

connection.end()