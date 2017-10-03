import * as React from "react";

export interface AnswerProps {
    text: string;
    id: number;
    letter: string;
    levelId: number;
    questionId: number;

    onClick: Function;
}

export function AnswerComponent({ text, letter, onClick }: AnswerProps) {
    return (
        <button onClick={() => onClick()}>{letter.toUpperCase()}: {text}</button>
    );
}