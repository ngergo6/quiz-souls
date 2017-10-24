import { Action } from "./Action";

export interface LoadQuestionAction extends Action {
    question: any;
    level: number;
}

export interface MarkAnswerAction extends Action {
    answerId: number;
}