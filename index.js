const { isValidMatNr } = require("./src/Server/helper");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

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
    const { matNr } = req.body;

    if (email && isValidMatNr(matNr)) {
        console.log(`Sending activation e-mail to ${req.body.email}`);
        //TODO Actually register user 
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(28961, () => console.log("FH Kicker running on localhost:28961"));
