function addRoutes(app) {
    app.get("/questionByLevel/:level", getNextQuestion);
    app.get("/levels/:level/questions/:questionId/answers/:answerId", submitAnswer);
}

function submitAnswer(req, res) {
    const { questionId, answerId, level } = req.params;

    const data = require("./questions.json");

    const questionsForLevel = data.questions[level];

    if (typeof questionsForLevel === "undefined") {
        res.status(404).send("level not found");
        return;
    }

    const question = questionsForLevel.find(question => question.id === Number(questionId));

    if (typeof question === "undefined") {
        res.status(404).send("question not found");
        return;
    }

    if (question.correctAnswer === Number(answerId)) {
        res.json({
            isCorrect: true
        });
    } else {
        res.json({
            isCorrect: false
        });
    }
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