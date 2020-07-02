var express = require("express");

var port = process.env.port || 3000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(port, function(){
    console.log(" lisening on port " + port);
});
