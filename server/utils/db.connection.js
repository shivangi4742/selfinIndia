var mysql = require('mysql'), 
connection = require('express-myconnection'), 

dbOptions = { 
	host: "localhost",
	user: "root",
	password: "password",
	database: "sys",
	insecureAuth : true
 }; 
 
con = connection(mysql, dbOptions, 'request')

module.exports = con