const data = require("../questions.json");

module.exports = {
    getQuestionByLevelAndId: getQuestionByLevelAndId,
    getRandomQuestionByLevel: getRandomQuestionByLevel
};

/**
 * @param {Number | String} level 
 * @param {Number} questionId
 */
function getQuestionByLevelAndId(level, questionId) {
    const questionsForLevel = data.questions[level];

    if (typeof questionsForLevel === "undefined") {
        throw new Error("Level not found");
    }

    const question = questionsForLevel.find(question => question.id === Number(questionId));

    if (typeof question === "undefined") {
        throw new Error("Question not found");
    }

    return question;
}

/**
 * 
 * @param {Number | String} level 
 * @returns {{ id: number, text: string, answers: *[] }}
 */
function getRandomQuestionByLevel(level) {
    const questions = data.questions[level];

    if (typeof questions === "undefined") {
        throw new Error("Level not found");
    }

    const questionsCount = questions.length;

    const randomQuestionIndex = getRandomNumber(questionsCount);

    const randomQuestion = questions[randomQuestionIndex];

    if (typeof randomQuestion === "undefined") {
        throw new Error("Question not found");
    }

    return randomQuestion;
}

function getRandomNumber(ceiling) {
    return Math.floor(Math.random() * 1000) % ceiling;
}