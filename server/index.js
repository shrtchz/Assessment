const express = require("express")
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    return res.status(200).send("My server is active");
});

 // Can't parser data successfully
app.post("/send-token", (req, res) => {
    console.log(req);
    return;
})

app.set("PORT", 8000 || process.env.PORT);
app.listen(app.get("PORT"), () => {
    console.log("server has started on " + app.get("PORT"));
})