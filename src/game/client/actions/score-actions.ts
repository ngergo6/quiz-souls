import { ADD_SCORE, RESET_SCORE } from "./action-names";
import { Action } from "../types/Action";

export interface AddScoreAction extends Action {
    amount: number
}

export function addScore(amount: number): AddScoreAction {
    return {
        type: ADD_SCORE,
        amount
    };
}

export function resetScore(): Action {
    return {
        type: RESET_SCORE
    };
}