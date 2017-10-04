import * as React from "react";
import { AnswerComponent, AnswerProps } from "./AnswerComponent";

export interface AnswersListDataProps {
	answers: AnswerProps[];
	levelId: number;
	questionId: number;
}

export interface AnswerListActions {
	submitAnswer: (levelId: number, questionId: number, answerId: number) => void
}

export interface AnswerListProps extends AnswersListDataProps, AnswerListActions {}

function renderAnswer(answer: AnswerProps, levelId: number, questionId: number, submitAnswer: (levelId: number, questionId: number, answerId: number) => void) {
	if (typeof answer === "undefined") {
		return "";
	}

	const { text, id, letter } = answer;;

	console.log("--------");
	console.log("id", id);
	console.log("text", text);
	console.log("letter", letter);
	console.log("--------");

	return <AnswerComponent text={text} id={id} letter={letter} levelId={levelId} questionId={questionId} onClick={submitAnswer.bind(null, levelId, questionId, id)} />;
}

export function AnswersListComponent({ answers, submitAnswer, levelId, questionId }: AnswerListProps) {
	console.log("answers", answers);

	return (
		<div style={{ flex: 2, flexDirection: "column" }}>
			<div style={{ flexDirection: "row" }}>
				{renderAnswer(answers[0], levelId, questionId, submitAnswer)}
				{renderAnswer(answers[1], levelId, questionId, submitAnswer)}
			</div>
			<div style={{ flexDirection: "row" }}>
				{renderAnswer(answers[2], levelId, questionId, submitAnswer)}
				{renderAnswer(answers[3], levelId, questionId, submitAnswer)}
			</div>
		</div>
	);
}
