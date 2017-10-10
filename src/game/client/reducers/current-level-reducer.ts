import { Action } from "../types/Action";
import { ADVANCE_CURRENT_LEVEL, RESET_CURRENT_LEVEL } from "../actions/action-names";

export function currentLevelReducer(state: number = 0, action: Action) {
    switch (action.type) {
        case ADVANCE_CURRENT_LEVEL:
            return advanceCurrentLevel(state);
        case RESET_CURRENT_LEVEL:
            return resetCurrentLevel();
        default:
            return state;
    }
}

function advanceCurrentLevel(state: number): number {
    return state + 1;
}

function resetCurrentLevel(): number {
    return 0;
}