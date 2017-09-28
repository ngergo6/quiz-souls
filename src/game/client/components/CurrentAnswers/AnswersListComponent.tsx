import * as React from "react";
import { AnswerComponent, AnswerProps } from "./AnswerComponent";

export interface AnswersListProps {
	answers: AnswerProps[];
}

function renderAnswer(answers: AnswerProps[], index: number) {
	if (typeof answers[index] === "undefined") {
		return "";
	}

	const { text, id, letter } = answers[index];

	return <AnswerComponent text={text} id={id} letter={letter} />;
}

export function AnswersListComponent({ answers }: AnswersListProps) {
	return (
		<div style={{ flex: 2, flexDirection: "column" }}>
			<div style={{ flexDirection: "row" }}>
				{renderAnswer(answers, 0)}
				{renderAnswer(answers, 1)}
			</div>
			<div style={{ flexDirection: "row" }}>
				{renderAnswer(answers, 1)}
				{renderAnswer(answers, 2)}
			</div>
		</div>
	);
}
