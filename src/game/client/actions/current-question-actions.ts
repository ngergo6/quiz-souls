import { LOAD_QUESTION } from "./action-names";
import { Action } from "../types/Action";

export interface LoadNextQuestionAction extends Action {
    currentLevel: number;
}

export function loadQuestion(currentLevel: number): LoadNextQuestionAction {
    return {
        type: LOAD_QUESTION,
        currentLevel
    };
}