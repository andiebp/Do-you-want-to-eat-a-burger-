var orm = require("../config/orm.js");
var table = "burgers";

var burger = {
	getAll: function(callback) {
		orm.selectAll(table, ["id", "burger_name", "devoured"], callback);
	},
	add: function(name, callback) {
		orm.insertOne(table, 'burger_name', name, callback);
	},
	devour: function(id, callback) {
		orm.updateOne(table, "devoured", '1', {"id": id}, callback);
	}
};

module.exports = burger;