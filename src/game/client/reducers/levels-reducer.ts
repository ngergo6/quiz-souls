import { Action } from "../types/Action";
import { SetLevelsAction } from "../actions/levels-actions";
import { SET_LEVELS } from "../actions/action-names";
import { ServerLevel } from "../types/ServerLevel";

export function levelsReducer(state: ServerLevel[] = [], action: Action): ServerLevel[] {
    switch(action.type) {
        case SET_LEVELS:
            return setLevels(state, action as SetLevelsAction);
        default:
            return state;
    }
}

function setLevels(state: ServerLevel[], action: SetLevelsAction): ServerLevel[] {
    return action.levels;
}