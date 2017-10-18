import { Action } from "../types/Action";
import { LOAD_QUESTION_FAILURE, LOAD_QUESTION_SUCCESS } from "../actions/action-names";
import { LoadQuestionResultAction } from "../actions/current-question-actions";
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
        default:
            return state;
    }
}

function loadQuestionFailure(state: CurrentQuestion, action: Action): CurrentQuestion {
    return state;
}

function loadQuestionSuccess(state: CurrentQuestion, action: LoadQuestionResultAction): CurrentQuestion {
    return {
        answers: action.question.answers,
        level: action.level,
        text: action.question.text,
        id: action.question.id
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