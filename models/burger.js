var orm = require("../config/orm.js");

var burger = {
	selectAll: function(callback) {
		orm.selectAll("burgers", function(res) {
			callback(res);
		});
	},
	insertOne: function(burgerName, callback) {
		orm.insertOne("burgers", "burger_name", burgerName, function(res) {
			callback(res);
		});
    },

	update: function(burgerId, callback) {
        var condition = "id =" + burgerId;

		orm.update("burgers", {devoured: true}, condition, callback);
	}
};


module.exports = burger;