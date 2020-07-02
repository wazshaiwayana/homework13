var connection = require("../config/connection.js");

function objToSql(ob) {
    var arr = [];
  
 
    for (var key in ob) {
      var value = ob[key];
    
      if (Object.hasOwnProperty.call(ob, key)) {
      
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
      
        arr.push(key + "=" + value);
      }
    }
 
    return arr.toString();
}

var orm = {
	selectAll: function(tableInput, callback) {
		var queryString = "SELECT * from ??";
		connection.query(queryString, [tableInput], function(err, res) {
			if (err) {
				throw err;
			}
			callback(res);
		});
	},
	insertOne: function(tableInput, columnName, burgerName, callback) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(queryString, [tableInput, columnName, burgerName], function(err, res) {
			if (err) {
				throw err;
			}
			callback(res);
		});
	},
  
   

    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
        if (err) {
        throw err;
        }

        cb(result);
     });
    }
};


module.exports = orm;