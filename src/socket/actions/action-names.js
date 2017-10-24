module.exports = {
    names: {
        START_GAME: "START_GAME",
        LOSE_GAME: "LOSE_GAME",
        WIN_GAME: "WIN_GAME",

        LOAD_QUESTION: "LOAD_QUESTION",
        MARK_ANSWER_SELECTED: "MARK_ANSWER_SELECTED",
        MARK_ANSWER_CORRECT: "MARK_ANSWER_CORRECT",
        MARK_ANSWER_WRONG: "MARK_ANSWER_WRONG",

        ADD_SCORE: "ADD_SCORE",
        RESET_SCORE: "RESET_SCORE"
    },
    client(actionName) {
        return `CLIENT_${actionName}`;
    },
    server(actionName) {
        return `SERVER_${actionName}`;
    }
}