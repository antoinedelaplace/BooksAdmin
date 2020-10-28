const mysql         = require("mysql");

const host          = 'localhost';
const user          = 'BD';
const password      = 'appliBDpassword';
const database      = 'bd_bdguy';
const databasePort  = 3306;

const connection = mysql.createConnection({
    host     : host,
    user     : user,
    password : password,
    port     : databasePort,
    database : database
});

//Database connection
connection.connect(function(err) {
    if (err) throw err;
});
module.exports = connection;
