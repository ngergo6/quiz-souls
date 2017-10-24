import * as uuid from "uuid";
import { Action } from "../types/Action";
import { SET_USER_ID, SET_USER_NAME } from "./action-names";
import { ApplicationState } from "../reducers/ApplicationState";

import { dispatchSocket, connect } from "../socket";

export interface SetUsernameAction extends Action {
    playerName: string;
}

export interface SetUserIdAction extends Action {
    userId: string;
}

export function setUserId(): Function {
    return (dispatch: Function, getState: () => ApplicationState) => {
        const state = getState();

        const userId = state.userInfo.userId || uuid();

        connect(userId).then(() => {
            dispatch({
                type: SET_USER_ID,
                userId,
            } as SetUserIdAction);
        });
    };
}

export function setUsername(playerName: string): Function {
    return (dispatch: Function, getState: () => ApplicationState) => {
        const state = getState();

        dispatch({
            type: SET_USER_NAME,
            playerName
        } as SetUsernameAction);
    };
}