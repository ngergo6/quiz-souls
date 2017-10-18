module.exports = function(socket) {
    socket.on("CLIENT_START_GAME", action => {
        console.log("client start game", action);
    });
}