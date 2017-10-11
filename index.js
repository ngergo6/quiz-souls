const process = require("process");
const http = require("http");
const express = require("express");
const dotenv = require("dotenv");

const game = require("./src/game");
const overlay = require("./src/overlay");
const socket = require("./src/socket");

dotenv.config();

const app = express();
const server = http.Server(app);

socket.use(server);

app.use("/game", game);
app.use("/overlay", overlay);

app.get("/", (req, res) => {
    res.redirect("/game");
});

server.listen(process.env.PORT, () => {
    console.log("app is running on port", process.env.PORT);
});