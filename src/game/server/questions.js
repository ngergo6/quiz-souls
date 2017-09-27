function addRoutes(app) {
    app.get("/questionByLevel/:level", getNextQuestion);
}

function getNextQuestion(req, res) {
    const level = req.params.level;

    const data = require("./questions.json");

    const questions = data.questions[level];

    if (typeof questions === "undefined") {
        res.status(404).send("Level not found");
        return;
    }

    const questionsCount = questions.length;

    const randomQuestionIndex = getRandomNumber(questionsCount);

    const response = questions[randomQuestionIndex];

    if (typeof response === "undefined") {
        res.status(404).send("Question not found");
        return;
    }

    res.json({
        id: response.id,
        text: response.text,
        answers: response.answers
    });
}

function getRandomNumber(ceiling) {
    return Math.floor(Math.random() * 1000) % ceiling;
}

module.exports = {
    addRoutes: addRoutes
}