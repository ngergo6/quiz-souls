const process = require("process");
const express = require("express");
const dotenv = require("dotenv");

const game = require("./src/game");
const overlay = require("./src/overlay");

dotenv.config();

const app = express();

app.use("/game", game);
app.use("/overlay", overlay);

app.get("/", (req, res) => {
    res.redirect("/game");
});

app.listen(process.env.PORT, () => {
    console.log("app is running on port", process.env.PORT);
});