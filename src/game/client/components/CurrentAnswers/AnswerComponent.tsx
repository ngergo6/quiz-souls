import * as React from "react";
import { AnswerMarkTypes } from "../../types/AnswerMarkTypes";

export interface AnswerProps {
    text: string;
    id: number;
    letter: string;
    levelId: number;
    questionId: number;
    markedAs: AnswerMarkTypes;
    isDisabled: boolean;

    submitAnswer: Function;
}

function onClick(submitAnswer: Function, isDisabled: boolean) {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!isDisabled) {
            submitAnswer();
        }

        event.currentTarget.blur();
    };
}

function getButtonClass(markedAs: AnswerMarkTypes, isDisabled: boolean) {
    if (isDisabled && markedAs === "none") {
        return "btn-secondary";
    }

    switch(markedAs) {
        case "correct":
            return "btn-success";
        case "wrong":
            return "btn-danger";
        case "selected":
            return "btn-warning";
        case "none":
        default:
            return "btn-primary";
    }
}

export function AnswerComponent({ text, letter, submitAnswer, markedAs, isDisabled }: AnswerProps) {
    const btnClass = getButtonClass(markedAs, isDisabled);

    return (
        <button style={{width: "100%"}} className={`btn ${btnClass}`} onClick={onClick(submitAnswer, isDisabled)}>{letter.toUpperCase()}: {text}</button>
    );
}