import { LOAD_QUESTION } from "./action-names";

export function loadNextQuestion(currentLevel) {
    return {
        type: LOAD_QUESTION,
        currentLevel
    }
}