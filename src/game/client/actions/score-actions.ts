import { ADD_SCORE, RESET_SCORE } from "./action-names";
import { Action } from "../types/Action";
import { ApplicationState } from "../reducers/ApplicationState";

import { dispatchSocket } from "../socket";
import {
    addScore as addScoreSocket,
    resetScore as resetScoreSocket
 } from "../socket/actions/score-actions";

export interface AddScoreAction extends Action {
    amount: number
}

export function addScore(amount: number): Function {
    return (dispatch: Function, getState: () => ApplicationState) => {
        dispatch({
            type: ADD_SCORE,
            amount
        } as AddScoreAction);

        const state = getState();
        dispatchSocket(addScoreSocket(state.userInfo.userId, amount));
    };
}

export function resetScore(): Function {
    return (dispatch: Function, getState: () => ApplicationState) => {
        dispatch({
            type: RESET_SCORE
        } as Action);

        const state = getState();
        dispatchSocket(resetScoreSocket(state.userInfo.userId));
    };
}