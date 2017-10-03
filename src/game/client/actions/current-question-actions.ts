import { LOAD_QUESTION_FAILURE, LOAD_QUESTION_SUCCESS } from "./action-names";
import { Action } from "../types/Action";
import { ServerQuestion } from "../types/ServerQuestion";
import { AnswerCheckResult } from "../types/AnswerCheckResult";
import { addScore } from "./score-actions";
import { getQuestionByLevel, checkAnswer as checkAnswerApi } from "../api-clients/questions-client";

export function loadQuestion(level: number): Function {
    return function(dispatch: Function) {
        return getQuestionByLevel(level)
            .then((serverQuestion: ServerQuestion) => dispatch(loadQuestionSuccess(serverQuestion, level)))
            .catch(error => dispatch(loadQuestionFailure()));
    };
}

export interface LoadQuestionResultAction extends Action {
    question: ServerQuestion;
    level: number;
}

export function loadQuestionSuccess(question: ServerQuestion, level: number): LoadQuestionResultAction {
    return {
        type: LOAD_QUESTION_SUCCESS,
        question,
        level
    }
}

export function loadQuestionFailure(): Action {
    return {
        type: LOAD_QUESTION_FAILURE
    }
}

export function checkAnswer(levelId: number, questionId: number, answerId: number): Function {
    return (dispatch: Function) => 
        checkAnswerApi(levelId, questionId, answerId)
            .then((answerResult: AnswerCheckResult) => {
                if (answerResult.isCorrect) {
                    // TODO: handle overflow
                    dispatch(loadQuestion(levelId + 1));
                } else {
                    dispatch(loadQuestion(0))
                }
            })
            .catch(() => {
                // TODO: handle
                console.log("error");
            });
}
