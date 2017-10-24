import { client, names } from "../../../../socket/actions/action-names";
import { AddScoreAction } from "../../../../socket/actions/score-action";
import { Action } from "../../../../socket/actions/Action";

export function resetScore(userId: string): Action {
    return {
        type: client(names.RESET_SCORE),
        userId
    };
}

export function addScore(userId: string, score: number): AddScoreAction {
    return {
        type: client(names.ADD_SCORE),
        userId,
        score
    };
}
