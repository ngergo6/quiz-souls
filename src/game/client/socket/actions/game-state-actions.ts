import { Action } from "../../types/Action";
import { START_GAME } from "./action-names";

export interface StartGameAction extends Action {
    userId: string;
    playerName: string;
}

export function startGame(userId: string, playerName: string): StartGameAction {
    return {
        type: START_GAME,
        userId,
        playerName
    };
}