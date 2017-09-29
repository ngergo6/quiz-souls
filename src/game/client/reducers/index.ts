import { combineReducers } from "redux";
import { currentQuestionReducer, CurrentQuestion } from "./current-question-reducer";
import { scoreReducer } from "./score-reducer";

export const reducers = combineReducers({
    currentQuestion: currentQuestionReducer,
    score: scoreReducer
});

export interface ApplicationState {
    currentQuestion: CurrentQuestion,
    score: number
}
