import { Action } from "../types/Action";
import { UserInfo } from "../types/UserInfo";
import { SET_USER_INFO } from "../actions/action-names";
import { SetUserInfoAction } from "../actions/user-info-actions";

export function userInfoReducer(state: UserInfo, action: Action) {
    if (typeof state === "undefined") {
        return getInitialState();
    }

    switch(action.type) {
        case SET_USER_INFO:
            return setUserInfo(state, action as SetUserInfoAction);
        default:
            return state;
    }
}

function setUserInfo(state: UserInfo, action: SetUserInfoAction): UserInfo {
    return Object.assign({}, state, {
        userId: action.userId,
        playerName: action.playerName
    } as UserInfo);
}

function getInitialState(): UserInfo {
    return {
        userId: "",
        playerName: ""
    };
}