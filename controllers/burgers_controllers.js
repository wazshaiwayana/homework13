var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};

		res.render("index", hbsObject);
	});
});


router.post("/", function(req, res) {
	console.log(req.body.burger_name);
	if(req.body.burger_name !== "") {
		burger.insertOne(req.body.burger_name.trim(), function() {
			res.redirect("/");
		});
	}
});


router.put("/burgers/:id", function(req, res) {
	console.log(req.params.id);

	burger.update(req.params.id, function() {
		res.sendStatus(200);
		// res.redirect("/");
	});
})

module.exports = router;