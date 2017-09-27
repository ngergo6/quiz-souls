import { combineReducers } from "redux";
import { currentQuestionReducer, CurrentQuestion } from "./current-question-reducer";

export const reducers = combineReducers({
    currentQuestion: currentQuestionReducer
});

export interface ApplicationState {
    currentQuestion: CurrentQuestion
}