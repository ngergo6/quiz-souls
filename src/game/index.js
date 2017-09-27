const express = require("express");
const path = require("path");

const app = express();

const questions = require("./server/questions");

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

questions.addRoutes(app);

module.exports = app;