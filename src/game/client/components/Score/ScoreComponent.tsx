import * as React from "react";

export interface ScoreProps {
	score: number;
}

export function ScoreComponent({ score }: ScoreProps) {
	return <div>{score}</div>;
}