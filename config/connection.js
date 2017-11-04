var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'burgers_db'
	})
}

connection.connect(function (err) {
	if (err) throw err;
	console.log("Connected to DB.");
});

var query = function (statement, callback) {
	connection.query(statement, function (err, rows, fields) {
		if (err) throw err;
		callback(rows, fields);
	});
}

module.exports = query;
