import { client, names } from "../../../../socket/actions/action-names";
import { LoadQuestionAction, MarkAnswerAction } from "../../../../socket/actions/current-question-actions";
import { ServerQuestion } from "../../types/ServerQuestion";

export function loadQuestion(userId: string, question: ServerQuestion, level: number): LoadQuestionAction {
    return {
        type: client(names.LOAD_QUESTION),
        userId,
        level,
        question
    };
}

export function markAnswerSelected(userId: string, answerId: number): MarkAnswerAction {
    return {
        type: client(names.MARK_ANSWER_SELECTED),
        userId,
        answerId
    };
}

export function markAnswerCorrect(userId: string, answerId: number): MarkAnswerAction {
    return {
        type: client(names.MARK_ANSWER_CORRECT),
        userId,
        answerId
    };
}

export function markAnswerWrong(userId: string, answerId: number): MarkAnswerAction {
    return {
        type: client(names.MARK_ANSWER_WRONG),
        userId,
        answerId
    };
}