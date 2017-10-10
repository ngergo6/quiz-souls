import * as React from "react";

export interface ScoreProps {
	score: number;
}

export function ScoreComponent({ score }: ScoreProps) {
	return <h4>Score: {score}</h4>;
}
