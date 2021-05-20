const mysql = require ('mysql');

const connection = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'myUser',
    password: 'myUser',
    database: 'agenda-petshop'
});

module.exports = connection;