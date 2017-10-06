import { SET_LEVELS } from "./action-names";
import { Action } from "../types/Action";
import { ServerLevel } from "../types/ServerLevel";
import { getLevels } from "../api-clients/levels-client";

export interface SetLevelsAction extends Action {
    levels: ServerLevel[];
}

export function setLevels(levels: ServerLevel[]): SetLevelsAction {
    return {
        type: SET_LEVELS,
        levels
    };
}

export function fetchLevels(): Function {
    return (dispatch: Function) => {
        getLevels().then((levels: ServerLevel[]) => {
            dispatch(setLevels(levels));
        });
    };
}