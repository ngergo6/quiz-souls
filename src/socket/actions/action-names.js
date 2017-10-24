module.exports = {
    names: {
        START_GAME: "START_GAME",
        LOSE_GAME: "LOSE_GAME",
        WIN_GAME: "WIN_GAME"
    },
    client(actionName) {
        return `CLIENT_${actionName}`;
    },
    server(actionName) {
        return `SERVER_${actionName}`;
    }
}