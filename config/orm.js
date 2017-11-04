var query = require("./connection.js");

//When user includes quotes in value, we want to escape them to prevent SQL errors
function escape(value) {
	return "'" + value.split("'").join("\'") + "'";
}

var orm = {
	//Select all items in a table. Fields can be either a string or array of strings for multiple columns.
	selectAll: function(table, fields, callback) {
		if( fields instanceof Array ) {
			fields = fields.join(", ");
		}
		var statement = ["SELECT", fields, "FROM", table].join(" ");
		query(statement, callback);
	},
	//Insert one row to table. Fields and Values can be either a string or array of strings for multiple columns.
	insertOne: function(table, fields, values, callback) {
		if( fields instanceof Array ) {
			fields = fields.join(", ");
		}
		if( values instanceof Array ) {
			values = values.map(escape).join(", ");
		} else {
			values = escape(values);
		}
		var statement = ["INSERT INTO", table, "(", fields, ") VALUES (", values, ")"].join(" ");
		query(statement, callback);
	},
	//Update one row in table. Conditions is an object as a key-value pair.
	updateOne: function(table, field, value, conditions, callback) {
		var where = [];
		for( var c in conditions ) {
			var condition = ["(", c, "=", escape(conditions[c]), ")"].join("");
			where.push(condition);
		}
		where = where.join(" AND ");

		var statement = ["UPDATE", table, "SET", field, "=", escape(value), "WHERE", where].join(" ");
		query(statement, callback);
	}
};

module.exports = orm;