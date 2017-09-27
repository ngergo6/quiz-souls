import { ServerAnswer, ServerQuestion } from "../types/ServerQuestion";

export function getQuestionByLevel(level: number): Promise<ServerQuestion> {
     return fetch(`/game/questionByLevel/${level}`)
        .then(response => {
            if (!response.ok) {
                throw { message: response.statusText, status: response.status }
            }

            return response;
        })
        .then(response => response.json());
}