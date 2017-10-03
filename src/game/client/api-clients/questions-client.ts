import { ServerAnswer, ServerQuestion } from "../types/ServerQuestion";
import { AnswerCheckResult } from "../types/AnswerCheckResult";

export function getQuestionByLevel(level: number): Promise<ServerQuestion> {
     return fetch(`/game/questionByLevel/${level}`)
        .then(response => {
            if (!response.ok) {
                throw { message: response.statusText, status: response.status };
            }

            return response;
        })
        .then(response => response.json());
}

export function checkAnswer(levelId: number, questionId: number, answerId: number): Promise<AnswerCheckResult> {
    return fetch(`/game/levels/${levelId}/questions/${questionId}/answers/${answerId}`)
        .then(response => {
            if (!response.ok) {
                throw { message: response.statusText, status: response.status };
            }

            return response;
        })
        .then(response => response.json());
}