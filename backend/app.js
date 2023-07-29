const express = require("express");
const app = express();

const port = 3000;

// app setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.render()
});
app.get("/login", (req, res) =>{
    res.render()
});

app.listen(port, function () {
    console.log("서버 가동");
});