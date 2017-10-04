import * as React from "react";

export interface AnswerProps {
    text: string;
    id: number;
    letter: string;
    levelId: number;
    questionId: number;

    submitAnswer: Function;
}

function onClick(submitAnswer: Function) {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
        submitAnswer();
        event.currentTarget.blur();
    };
}

export function AnswerComponent({ text, letter, submitAnswer }: AnswerProps) {
    return (
        <button style={{width: "100%"}} className="btn btn-primary" onClick={onClick(submitAnswer)}>{letter.toUpperCase()}: {text}</button>
    );
}