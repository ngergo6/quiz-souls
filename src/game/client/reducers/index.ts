import { combineReducers } from "redux";
import { currentQuestionReducer } from "./current-question-reducer";
import { scoreReducer } from "./score-reducer";
import { levelsReducer } from "./levels-reducer";
import { gameStateReducer } from "./game-state-reducer";
import { currentLevelReducer } from "./current-level-reducer";
import { userInfoReducer } from "./user-info-reducer";
import { ApplicationState } from "./ApplicationState";

export const reducers = combineReducers({
    currentQuestion: currentQuestionReducer,
    score: scoreReducer,
    levels: levelsReducer,
    gameState: gameStateReducer,
    currentLevelId: currentLevelReducer,
    userInfo: userInfoReducer
});
