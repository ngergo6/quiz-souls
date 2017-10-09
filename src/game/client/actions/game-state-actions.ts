import { Action } from "../types/Action";
import { INIT_GAME, START_GAME, WIN_GAME, LOSE_GAME } from "./action-names";
import { fetchLevels } from "./levels-actions";
import { loadQuestion } from "./current-question-actions";
import { resetScore } from "./score-actions";

export function initGame(): Function {
    return function(dispatch: Function) {
        dispatch(fetchLevels());
        dispatch(resetScore());

        dispatch({
            type: INIT_GAME
        });
    };
}

export function startGame(): Function {
    return function(dispatch: Function) {
        dispatch(loadQuestion(0));

        dispatch({
            type: START_GAME
        });
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