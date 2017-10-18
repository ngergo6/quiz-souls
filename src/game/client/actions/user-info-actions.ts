import * as uuid from "uuid";
import { Action } from "../types/Action";
import { SET_USER_INFO } from "./action-names";
import { ApplicationState } from "../reducers/ApplicationState";

export interface SetUserInfoAction extends Action {
    userId: string;
    playerName: string;
}

export function setUserInfo(playerName: string): Function {
    return (dispatch: Function, getState: () => ApplicationState) => {
        const state = getState();

        dispatch({
            type: SET_USER_INFO,
            userId: state.userInfo.userId || uuid(),
            playerName
        });
    };
}