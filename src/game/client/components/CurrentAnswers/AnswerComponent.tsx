import * as React from "react";

export interface AnswerProps {
    text: string;
    id: number;
    letter: string;
}

export function AnswerComponent({ text, letter }: AnswerProps) {
    return (
        <button>{letter.toUpperCase()}: {text}</button>
    );
}