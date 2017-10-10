import { Action } from "../types/Action";
import { ADVANCE_CURRENT_LEVEL, RESET_CURRENT_LEVEL } from "./action-names";

export function advanceCurrentLevel(): Action {
    return {
        type: ADVANCE_CURRENT_LEVEL
    };
}

export function resetCurrentLevel(): Action {
    return {
        type: RESET_CURRENT_LEVEL
    };
}