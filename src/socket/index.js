const socketio = require("socket.io");

/**
 * @param server *
 */
function bootstrap(server) {
    const io = socketio(server);

    io.on("connection", function(socket) {
        console.log("a user connected");

        socket.on("handshake", function(data) {
            console.log("handshake", data);
        });
    });
}

module.exports = {
    use: bootstrap
}