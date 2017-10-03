import * as React from "react";
import { AnswerComponent, AnswerProps } from "./AnswerComponent";

export interface AnswersListDataProps {
	answers: AnswerProps[];
}

export interface AnswerListActions {
	submitAnswer: (levelId: number, questionId: number, answerId: number) => void
}

export interface AnswerListProps extends AnswersListDataProps, AnswerListActions {}

function renderAnswer(answers: AnswerProps[], index: number, submitAnswer: (levelId: number, questionId: number, answerId: number) => void) {
	if (typeof answers[index] === "undefined") {
		return "";
	}

	const { text, id, letter, levelId, questionId } = answers[index];

	return <AnswerComponent text={text} id={id} letter={letter} levelId={levelId} questionId={questionId} onClick={submitAnswer.bind(null, levelId, questionId, id)} />;
}

export function AnswersListComponent({ answers, submitAnswer }: AnswerListProps) {
	return (
		<div style={{ flex: 2, flexDirection: "column" }}>
			<div style={{ flexDirection: "row" }}>
				{renderAnswer(answers, 0, submitAnswer)}
				{renderAnswer(answers, 1, submitAnswer)}
			</div>
			<div style={{ flexDirection: "row" }}>
				{renderAnswer(answers, 1, submitAnswer)}
				{renderAnswer(answers, 2, submitAnswer)}
			</div>
		</div>
	);
}
