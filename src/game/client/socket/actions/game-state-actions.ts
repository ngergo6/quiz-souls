import { client, names } from "../../../../socket/actions/action-names";
import { StartGameAction, EndGameAction } from "../../../../socket/actions/game-state-actions";

export function startGame(userId: string, playerName: string): StartGameAction {
    return {
        type: client(names.START_GAME),
        userId,
        playerName
    };
}

export function wonGame(userId: string, score: number): EndGameAction {
    return {
        type: client(names.WIN_GAME),
        userId,
        score
    };
}

export function lostGame(userId: string, score: number): EndGameAction {
    return {
        type: client(names.LOSE_GAME),
        userId,
        score
    };
}