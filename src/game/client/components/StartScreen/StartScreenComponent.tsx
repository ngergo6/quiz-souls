import * as React from "react";

export interface StartScreenComponentDataProps {

}

export interface StartScreenComponentActions {
    startGame: () => void;
}

export interface StartScreenComponentProps extends StartScreenComponentActions, StartScreenComponentDataProps {}

export function StartScreenComponent({ startGame }: StartScreenComponentProps) {
    return (
        <div>
            <h1>Welcome to Quiz Souls!</h1>
            <p>Your goal is to defeat the enemies by answering the questions.</p>
            <p>Killing enemies will grant you souls.</p>

            <button className="btn btn-primary" onClick={() => startGame()}>Start Game</button>
        </div>
    );
}