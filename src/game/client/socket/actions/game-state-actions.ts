import { Action } from "../../types/Action";
import { client, names } from "../../../../socket/actions/action-names";
import { StartGameAction } from "../../../../socket/actions/game-state-actions";

export function startGame(userId: string, playerName: string): StartGameAction {
    return {
        type: client(names.START_GAME),
        userId,
        playerName
    };
}