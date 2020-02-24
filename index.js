const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require("body-parser");

//Support JSON
app.use(bodyParser.json());

//Support URL encoded body
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/static", express.static("dist"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.post("/register-user", (req, res) => {
    const { email } = req.body;

    //TODO validate Data

    if (email) {
        console.log(`Sending activation e-mail to ${req.body.email}`);
        //TODO Actually register user 
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(28961, () => console.log("FH Kicker running on localhost:28961"));
