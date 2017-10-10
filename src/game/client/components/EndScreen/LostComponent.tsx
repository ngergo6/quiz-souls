import * as React from "react";

export interface LostComponentDataProps {
    score: number;
}

export interface LostComponentActionProps {

}

export interface LostComponentProps extends LostComponentDataProps, LostComponentActionProps {}

export function LostComponent({ score }: LostComponentProps) {
    return (
        <div>
            <h4>Sorry, you got that one wrong!</h4>
            <p>Your final score was: {score}</p>
            <p>Press restart to try again.</p>
        </div>
    );
}
