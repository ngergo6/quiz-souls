import * as React from "react";

export interface AnswerProps {
    text: string;
    id: number;
    letter: string;
    levelId: number;
    questionId: number;
    isMarked: boolean;
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

export function AnswerComponent({ text, letter, submitAnswer, isMarked, isDisabled }: AnswerProps) {
    const btnClass = isMarked
        ? "btn-warning"
        : isDisabled ? "btn-secondary" : "btn-primary";

    return (
        <button style={{width: "100%"}} className={`btn ${btnClass}`} onClick={onClick(submitAnswer, isDisabled)}>{letter.toUpperCase()}: {text}</button>
    );
}