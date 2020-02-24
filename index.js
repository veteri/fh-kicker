const express = require("express");
const app = express();
var path = require('path');

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(28960, () => console.log("FH Kicker running on localhost:28960"));
