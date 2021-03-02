const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { users } = require("./user/user");
var routeCache = require('route-cache');

app.use(bodyParser.json());
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
	res.setHeader("Access-Control-Allow-Credentials", true);
	next();
});


const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
	res.json({status: 200});
});

app.listen(PORT, () => {
	console.log("Server running on port:", PORT);
});
