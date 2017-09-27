import { Action } from "../types/Action";
import { LOAD_QUESTION } from "../actions/action-names";
import { LoadNextQuestionAction } from "../actions/current-question-actions";

export interface CurrentQuestion {
    text: string;
    answers: string[];
    level: number;
}

export function currentQuestionReducer(state: CurrentQuestion, action: Action): CurrentQuestion {
    if (typeof state === "undefined") {
        return getInitialState();
    }

    switch(action.type) {
        case LOAD_QUESTION:
            return loadNextQuestion(state, action as LoadNextQuestionAction);
        default:
            return state;
    }
}

function loadNextQuestion(state: CurrentQuestion, action: LoadNextQuestionAction): CurrentQuestion {
    return {
        answers: [ "a1", "a2", "a3", "a4" ],
        level: action.currentLevel,
        text: "Which is the right answer?"
    }
}

function getInitialState(): CurrentQuestion {
    return {
        answers: ["initial", "state", "1", "2"],
        level: 0,
        text: "Initial state"
    };
}