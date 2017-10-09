import { Action } from "../types/Action";
import { INIT_GAME, START_GAME, WIN_GAME, LOSE_GAME } from "./action-names";

export function initGame(): Action {
    return {
        type: INIT_GAME
    };
}

export function startGame(): Action {
    return {
        type: START_GAME
    };
}

export function winGame(): Action {
    return {
        type: WIN_GAME
    };
}

export function loseGame(): Action {
    return {
        type: LOSE_GAME
    };
}