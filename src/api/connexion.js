const mysql         = require("mysql");

const host          = 'localhost';
const user          = 'root';
const password      = 'root';
const database      = 'bd_bdguy';
const databasePort  = 1025;

const connection = mysql.createConnection({
    host     : host,
    user     : user,
    port     : databasePort,
    password : password,
    database : database
});

//Database connection
connection.connect(function(err) {
    if (err) throw err;
});
module.exports = connection;
