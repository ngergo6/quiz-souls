import * as React from "react";

export interface EndScreenComponentDataProps {
    resultComponent: React.ReactElement<any>;
}

export interface EndScreenComponentActions {
    restartGame: () => void;
}

export interface EndScreenComponentProps extends EndScreenComponentActions, EndScreenComponentDataProps {}

export function EndScreenComponent({ restartGame, resultComponent }: EndScreenComponentProps) {
    return (
        <div>
            <h3>Game over</h3>
            
            { resultComponent }

            <button className="btn btn-primary" onClick={() => restartGame()}>Restart Game</button>
        </div>
    );
}