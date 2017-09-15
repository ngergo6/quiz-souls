import { LOAD_QUESTION } from "../actions/action-names";
import { getRandomQuestionByLevel } from "../api-clients/questions-client";

export function gameClientReducer(state = {}, action) {
    switch(action.type) {
        case LOAD_QUESTION:
            return loadNextQuestion(state, action);
        default:
            return state;
    }
}

function loadNextQuestion(state, action) {
    const { currentLevel } = action;

    return getRandomQuestionByLevel(parseInt(currentLevel));
}