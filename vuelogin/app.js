const
const express = require("express");
const app = express();

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.get("/", (req, res) =>{
    res.render("home/index.vue")
});

app.get("/login", (req, res) => {
    res.render("home/login.vue")
});

app.listen(3000, () => {
    console.log("서버 가동")
});