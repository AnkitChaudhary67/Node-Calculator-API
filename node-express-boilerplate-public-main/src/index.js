const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.post("/add", (req, res) => {
    if(isNaN(req.body.num1)){
        return res.json({
            "status": "Failure"
        })
    }
    let sum = Number(req.body.num1) + Number(req.body.num2);
    res.setHeader({"Content-type" : "application/json"});
    res.json({
        "status": "success",
        "message": `the sum of given two numbers ${sum}`
    }
    )
})
app.post("/subtract", (req, res) => {
    if(isNaN(req.body.num1)){
        return res.json({
            "status": "Failure"
        })
    }
    let subtract = Number(req.body.num1) - Number(req.body.num2);
    res.setHeader({"Content-type" : "application/json"});
    res.json({
        "status": "success",
        "message": `the difference of given two numbers ${subtract}`
    }
    )
})
app.post("/multiply ", (req, res) => {
    if(isNaN(req.body.num1)){
        return res.json({
            "status": "Failure"
        })
    }
    let multiply = Number(req.body.num1) * Number(req.body.num2);
    res.setHeader({"Content-type" : "application/json"});
    res.json({
        "status": "success",
        "message": `The product of given numbers ${multiply}`
    }
    )
})
app.post("/divide ", (req, res) => {
    if(isNaN(req.body.num1)){
        return res.json({
            "status": "Failure"
        })
    }
    let divide = Number(req.body.num1) / Number(req.body.num2);
    res.setHeader({"Content-type" : "application/json"});
    res.json({
        "status": "success",
        "message": `The division of given numbers ${divide}`
    }
    )
})
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;