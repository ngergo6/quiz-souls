import { Action } from "../types/Action";
import { GameState } from "../types/GameState";
import { INIT_GAME, START_GAME, WIN_GAME, LOSE_GAME } from "../actions/action-names";

export function gameStateReducer(state: GameState = "not-started-yet", action: Action): GameState {
    switch(action.type) {
        case INIT_GAME:
            return "not-started-yet";
        case START_GAME:
            return "running";
        case WIN_GAME:
            return "game-over-won";
        case LOSE_GAME:
            return "game-over-lost"
        default:
            return state;
    }
}