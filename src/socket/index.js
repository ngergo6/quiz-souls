const socketio = require("socket.io");

const gameStateHandler = require("./handlers/game-state-handler");
const currentQuestionHandler = require("./handlers/current-question-handler");
const scoreHandler = require("./handlers/score-handler");

/**
 * @param server *
 */
function bootstrap(server) {
    const io = socketio(server);

    io.on("connection", function(socket) {
        console.log("a user connected");

        socket.on("$_join_room", (userId) => {
            console.log("join room", userId);
            socket.join(userId);
        });

        registerHandlers(io, socket, [
            gameStateHandler,
            currentQuestionHandler,
            scoreHandler
        ]);
    });
}

function registerHandlers(io, socket, handlers) {
    handlers.forEach(handler => {
        handler(io, socket);
    });
}

module.exports = {
    use: bootstrap
}