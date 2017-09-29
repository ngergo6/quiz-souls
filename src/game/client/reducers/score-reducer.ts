import { Action } from "../types/Action";
import { ADD_SCORE, RESET_SCORE } from "../actions/action-names";
import { addScore, AddScoreAction } from "../actions/score-actions";

export function scoreReducer(state: number = 0, action: Action) {
    switch(action.type) {
        case ADD_SCORE:
            return onAddScore(state, action as AddScoreAction);
        case RESET_SCORE:
            return onResetScore();
        default:
            return state;
    }
}

function onAddScore(state: number, action: AddScoreAction): number {
    return state + action.amount;
}

function onResetScore(): number {
    return 0;
}