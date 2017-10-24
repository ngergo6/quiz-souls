import { Action } from "../types/Action";
import { INIT_GAME, START_GAME, WIN_GAME, LOSE_GAME } from "./action-names";
import { fetchLevels } from "./levels-actions";
import { loadQuestion } from "./current-question-actions";
import { resetScore } from "./score-actions";
import { resetCurrentLevel } from "./current-level-actions";
import { setUserId } from "./user-info-actions";
import { ApplicationState } from "../reducers/ApplicationState";

import { dispatchSocket } from "../socket/index";
import { startGame as startGameSocket, wonGame, lostGame } from "../socket/actions/game-state-actions";

export function initGame(): Function {
    return function(dispatch: Function) {
        dispatch(setUserId());
        dispatch(fetchLevels());
        dispatch(resetScore());
        dispatch(resetCurrentLevel());

        dispatch({
            type: INIT_GAME
        });
    };
}

export function startGame(): Function {
    return function(dispatch: Function, getState: () => ApplicationState) {
        dispatch(loadQuestion(0));

        dispatch({
            type: START_GAME
        });

        const state = getState();
        dispatchSocket(startGameSocket(state.userInfo.userId, state.userInfo.playerName));
    };
}

export function winGame(): Function {
    return function(dispatch: Function, getState: () => ApplicationState) {
        dispatch({
            type: WIN_GAME
        });

        const state = getState();
        dispatchSocket(wonGame(state.userInfo.userId, state.score));
    };
}

export function loseGame(): Function {
    return function(dispatch: Function, getState: () => ApplicationState) {
        dispatch({
            type: LOSE_GAME
        });

        const state = getState();
        dispatchSocket(lostGame(state.userInfo.userId, state.score));
    };
}