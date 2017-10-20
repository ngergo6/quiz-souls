module.exports = {
    names: {
        START_GAME: "START_GAME"
    },
    client(actionName) {
        return `CLIENT_${actionName}`;
    },
    server(actionName) {
        return `SERVER_${actionName}`;
    }
}