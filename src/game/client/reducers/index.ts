import { combineReducers } from "redux";
import { currentQuestionReducer } from "./current-question-reducer";

export const reducers = combineReducers({
    currentQuestion: currentQuestionReducer
});