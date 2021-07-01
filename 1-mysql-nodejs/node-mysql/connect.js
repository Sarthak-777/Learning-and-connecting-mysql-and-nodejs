const mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'password',
    database: 'todoapp'
})

connection.connect((err)=>{
    if(err){
        return console.log(`Error: ${err.message}`)
    }
    let createTodos = `CREATE TABLE IF NOT EXISTS todos(
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        completed TINYINT(1) NOT NULL DEFAULT 0
    )`
    connection.query(createTodos, (err, results, fields)=>{
        if(err){
            console.log(err.message)
        }
        console.log(results)
        console.log(fields)
    })
})