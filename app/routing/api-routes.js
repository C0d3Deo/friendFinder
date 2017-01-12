var path = require("path");

var friendslist = require("../data/friends.js");

module.exports = function(app) {
	app.get("/api/friends", function (req, res) {
		res.json(friendslist);
	});

	app.post("/api/firends", function (req, res) {
		friendslist.push(req.body);
		res.json(true);
	});
};