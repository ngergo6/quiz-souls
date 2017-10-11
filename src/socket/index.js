const socketio = require("socket.io");

/**
 * @param server *
 */
function bootstrap(server) {
    const io = socketio(server);


}

module.exports = {
    use: bootstrap
}