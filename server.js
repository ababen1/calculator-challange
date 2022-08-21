const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.json());

app.get("/", (req, res) => {
    console.log(req);
    res.json({ message: "Welcome" });
});

app.post("/add", (req, res) => {
    if (!req.body.operatorA || !req.body.operatorB) {
        res.json({
            "error": "please fill out all fields"
        })
    }
    else {
        var result = parseFloat(req.body.operatorA) + parseFloat(req.body.operatorB);
        res.json({
            "result": result
        })
    }
});

app.post("/sub", (req, res) => {
    if (!req.body.operatorA || !req.body.operatorB) {
        res.json({
            "error": "please fill out all fields"
        })
    }
    else {
        var result = parseFloat(req.body.operatorA) - parseFloat(req.body.operatorB);
        res.json({
            "result": result
        })
    }
});

app.post("/multiply", (req, res) => {
    if (!req.body.operatorA || !req.body.operatorB) {
        res.json({
            "error": "please fill out all fields"
        })
    }
    else {
        var result = parseFloat(req.body.operatorA) * parseFloat(req.body.operatorB);
        res.json({
            "result": result
        })
    }
});

app.post("/divide", (req, res) => {
    if (!req.body.operatorA || !req.body.operatorB) {
        res.json({
            "error": "please fill out all fields"
        })
    }
    else if (parseFloat(req.body.operatorB) === 0) {
        res.json({
            "error": "can't divide by zero"
        })
    }
    else {
        var result = parseFloat(req.body.operatorA) / parseFloat(req.body.operatorB);
        res.json({
            "result": result
        })
    }
});

app.listen(8080, (port) => console.log(`listening on port ${port}`));