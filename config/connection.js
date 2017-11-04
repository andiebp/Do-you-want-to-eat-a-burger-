var connection = require('mysql').createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'burgers_db'
});

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
