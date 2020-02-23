const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("FH Kicker");
});

app.listen(28960, () => console.log("FH Kicker running on localhost:28960"));
