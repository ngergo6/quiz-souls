import { LOAD_QUESTION_FAILURE, LOAD_QUESTION_SUCCESS, MARK_ANSWER } from "./action-names";
import { Action } from "../types/Action";
import { ServerQuestion } from "../types/ServerQuestion";
import { AnswerCheckResult } from "../types/AnswerCheckResult";
import { addScore  } from "./score-actions";
import { getQuestionByLevel, checkAnswer as checkAnswerApi } from "../api-clients/questions-client";
import { ApplicationState } from "../reducers/ApplicationState";
import { initGame, loseGame, winGame } from "./game-state-actions";
import { advanceCurrentLevel } from "./current-level-actions";

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

export interface MarkAnswerAction extends Action {
    answerId: number;
}

export function markAnswer(levelId: number, questionId: number, answerId: number): Function {
    return (dispatch: Function, getState: () => ApplicationState) => {
        dispatch({
            answerId: answerId,
            type: MARK_ANSWER
        } as MarkAnswerAction);

        const state = getState();

        const currentLevel = state.levels.find(level => level.id === levelId);

        setTimeout(() => {
            dispatch(checkAnswer(levelId, questionId, answerId));
        }, currentLevel.timeout);
    };
}

export function checkAnswer(levelId: number, questionId: number, answerId: number): Function {
    return (dispatch: Function, getState: () => ApplicationState) => 
        checkAnswerApi(levelId, questionId, answerId)
            .then((answerResult: AnswerCheckResult) => {
                if (answerResult.isCorrect) {
                    const state = getState();

                    dispatch(advanceCurrentLevel());
                    dispatch(addScore(answerResult.score));
                    loadNextQuestion(dispatch, state)(answerResult, levelId);
                } else {
                    dispatch(loseGame());
                }
            })
            .catch(() => {
                // TODO: handle error
                console.log("error");
            });
}

function loadNextQuestion(dispatch: Function, state: ApplicationState) {
    return function (answerResult: AnswerCheckResult, levelId: number): void {
        const nextLevelId: number = levelId + 1;

        if (nextLevelId < state.levels.length) {
            dispatch(loadQuestion(nextLevelId));
        } else {
            dispatch(winGame());
        }
    };
}