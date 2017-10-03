const { getQuestionByLevelAndId, getRandomQuestionByLevel } = require("./services/questions-service");
const { getLevel } = require("./services/levels-service");

function addRoutes(app) {
	app.get("/questionByLevel/:level", getNextQuestion);
    app.get("/levels/:levelId/questions/:questionId/answers/:answerId", checkAnswer);
    app.get("/levels/:levelId", getLevelById);
    app.get("/levels", getLevels);
}

function checkAnswer(req, res) {
	const { questionId, answerId, levelId } = req.params;

	try {
		const question = getQuestionByLevelAndId(levelId, questionId);
        const level = getLevel(levelId);

		if (question.correctAnswer === Number(answerId)) {
			res.json({
                isCorrect: true,
                score: level.score
			});
		} else {
			res.json({
                isCorrect: false,
                score: 0
			});
		}
	} catch (error) {
		res.status(404).send(error.message);
	}
}

function getNextQuestion(req, res) {
	const { level } = req.params;

	try {
		const response = getRandomQuestionByLevel(level);

		res.json({
			id: response.id,
			text: response.text,
			answers: response.answers
		});
	} catch (error) {
		res.status(404).send(error.message);
	}
}

function getLevelById(req, res) {
    const { levelId } = req.params;

    try {
        const level = getLevel(levelId);

        res.json({
            id: level.id,
            text: level.text,
            score: level.score
        });
    } catch (error) {
        res.status(404).send(error.message);
    }
}

function getLevels(req, res) {
    
}

module.exports = {
	addRoutes: addRoutes
};
