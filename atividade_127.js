var unirest = require("unirest");

var req = unirest("GET", "https://ballet-dictionary.p.rapidapi.com/names/B-80/definition");

req.headers({
	"x-rapidapi-key": "c81d404082mshe7f0c13737e8a68p1c850bjsn472fbc6a1f54",
	"x-rapidapi-host": "ballet-dictionary.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});