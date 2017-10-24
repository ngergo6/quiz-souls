import { Action } from "../types/Action";
import { UserInfo } from "../types/UserInfo";
import { SET_USER_ID, SET_USER_NAME } from "../actions/action-names";
import { SetUserIdAction, SetUsernameAction } from "../actions/user-info-actions";

export function userInfoReducer(state: UserInfo, action: Action) {
    if (typeof state === "undefined") {
        return getInitialState();
    }

    switch(action.type) {
        case SET_USER_ID:
            return setUserId(state, action as SetUserIdAction);
        case SET_USER_NAME:
            return setUserName(state, action as SetUsernameAction);
        default:
            return state;
    }
}

function setUserId(state: UserInfo, action: SetUserIdAction): UserInfo {
    return Object.assign({}, state, {
        userId: action.userId
    } as UserInfo);
}

function setUserName(state: UserInfo, action: SetUsernameAction): UserInfo {
    return Object.assign({}, state, {
        playerName: action.playerName
    } as UserInfo);
}

function getInitialState(): UserInfo {
    return {
        userId: "",
        playerName: ""
    };
}