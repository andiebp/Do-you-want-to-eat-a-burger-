var connection = require('mysql').createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'burgers_db'
});

function query(statement, callback) {
	connection.connect(function (err) {
		if (err) throw err;
		connection.query(statement, function (err, rows, fields) {
			connection.end();
			if (err) throw err;
			callback(rows, fields);
		});
	});
}

module.export = query;
