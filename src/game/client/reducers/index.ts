import { combineReducers } from "redux";
import { currentQuestionReducer, CurrentQuestion } from "./current-question-reducer";
import { scoreReducer } from "./score-reducer";
import { levelsReducer } from "./levels-reducer";
import { gameStateReducer } from "./game-state-reducer";

export const reducers = combineReducers({
    currentQuestion: currentQuestionReducer,
    score: scoreReducer,
    levels: levelsReducer,
    gameState: gameStateReducer
});