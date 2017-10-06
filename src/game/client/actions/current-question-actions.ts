import { LOAD_QUESTION_FAILURE, LOAD_QUESTION_SUCCESS } from "./action-names";
import { Action } from "../types/Action";
import { ServerQuestion } from "../types/ServerQuestion";
import { AnswerCheckResult } from "../types/AnswerCheckResult";
import { addScore, resetScore } from "./score-actions";
import { getQuestionByLevel, checkAnswer as checkAnswerApi } from "../api-clients/questions-client";
import { ApplicationState } from "../reducers/ApplicationState";

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
    return (dispatch: Function, getState: () => ApplicationState) => 
        checkAnswerApi(levelId, questionId, answerId)
            .then((answerResult: AnswerCheckResult) => {
                if (answerResult.isCorrect) {
                    const state = getState();

                    getLoadNextQuestion(dispatch, state)(answerResult, levelId);
                } else {
                    dispatch(resetScore());
                    dispatch(loadQuestion(0));
                }
            })
            .catch(() => {
                // TODO: handle error
                console.log("error");
            });
}

function getLoadNextQuestion(dispatch: Function, state: ApplicationState) {
    return function (answerResult: AnswerCheckResult, levelId: number): void {
        const nextLevelId: number = levelId + 1;

        // todo: check game completed instead

        if (nextLevelId < state.levels.length) {
            dispatch(loadQuestion(nextLevelId));
            dispatch(addScore(answerResult.score));
        } else {
            // todo: handle game completed
        }
    };
}