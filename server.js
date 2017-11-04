var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyparser = require('body-parser');
var port = process.env.PORT || 3000;
var routes = require("./controllers/burgers_controller.js");
var app = express();

app.use(express.static("public"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: false
}));

app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(port, function () {
	console.log("Server is running on port", port);
});
