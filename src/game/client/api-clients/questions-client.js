import * as data from "../questions.json";

export function getRandomQuestionByLevel(level) {
    const questions = data.questions[level];

    const questionsCount = questions.count;

    const randomQuestionIndex = getRandomNumber(questionsCount);

    return questions[randomQuestionIndex];
}

function getRandomNumber(ceiling) {
    return Math.floor(Math.random() * 1000) % ceiling;
}