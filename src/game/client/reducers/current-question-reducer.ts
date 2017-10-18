import { Action } from "../types/Action";
import { LOAD_QUESTION_FAILURE, LOAD_QUESTION_SUCCESS, MARK_ANSWER } from "../actions/action-names";
import { LoadQuestionResultAction, MarkAnswerAction } from "../actions/current-question-actions";
import { CurrentQuestion } from "../types/CurrentQuestion";
import { Answer } from "../types/Answer";

export function currentQuestionReducer(state: CurrentQuestion, action: Action): CurrentQuestion {
    if (typeof state === "undefined") {
        return getInitialState();
    }

    switch(action.type) {
        case LOAD_QUESTION_SUCCESS:
            return loadQuestionSuccess(state, action as LoadQuestionResultAction);
        case LOAD_QUESTION_FAILURE:
            return loadQuestionFailure(state, action);
        case MARK_ANSWER:
            return markAnswer(state, action as MarkAnswerAction);
        default:
            return state;
    }
}

function loadQuestionFailure(state: CurrentQuestion, action: Action): CurrentQuestion {
    return state;
}

function markAnswer(state: CurrentQuestion, action: MarkAnswerAction): CurrentQuestion {
    return Object.assign({}, state, {
        answers: state.answers.map(a => {
            if (a.id === action.answerId) {
                return Object.assign({}, a, { isMarked: true } as Answer);
            } else {
                return Object.assign({}, a);
            }
        })
    } as CurrentQuestion);
}

function loadQuestionSuccess(state: CurrentQuestion, action: LoadQuestionResultAction): CurrentQuestion {
    return {
        answers: action.question.answers.map(a => ({
            id: a.id,
            isMarked: false,
            text: a.text
        } as Answer)),
        level: action.level,
        text: action.question.text,
        id: action.question.id,
    }
}

function getInitialState(): CurrentQuestion {
    return {
        answers: [],
        level: 0,
        text: "Initial state",
        id: 0
    };
}