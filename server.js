var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var port = process.env.port || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");
app.use(routes);

app.listen(port, function() {
    console.log(" lisening on port " + port);
});
