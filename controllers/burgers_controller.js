var router = require("express").Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
	burger.getAll(function (data) {
		res.render("index", {
			burgers: data
		};);
	});
});

router.post("/api/burger", function (req, res) {
	burger.add(req.body.name, function (result) {
		// Send back the ID of the new quote
		res.json({
			id: result.insertId
		});
	});
});

router.put("/api/burger/:id", function (req, res) {
	burger.devour(req.params.id, function (result) {
		// If no rows were changed, then the ID must not exist, so 404
		res.status(result.changedRows ? 200 : 404);
	});
});

module.exports = router;