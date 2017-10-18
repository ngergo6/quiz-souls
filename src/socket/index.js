const socketio = require("socket.io");

const gameStateHandler = require("./handlers/game-state-handler");

/**
 * @param server *
 */
function bootstrap(server) {
    const io = socketio(server);

    io.on("connection", function(socket) {
        console.log("a user connected");

        gameStateHandler(socket);
    });
}

module.exports = {
    use: bootstrap
}