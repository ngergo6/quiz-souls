import * as React from "react";

export interface WonComponentDataProps {
    score: number;
}

export interface WonComponentActionProps {

}

export interface WonComponentProps extends WonComponentDataProps, WonComponentActionProps {}

export function WonComponent({ score }: WonComponentProps) {
    return (
        <div>
            <h4>Congratulations, you defeated every enemy!</h4>
            <p>Your final score is: {score}</p>
            <p>Press restart To play another game.</p>
        </div>
    );
}