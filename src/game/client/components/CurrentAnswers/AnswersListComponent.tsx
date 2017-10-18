import * as React from "react";
import { AnswerComponent, AnswerProps } from "./AnswerComponent";

export interface AnswersListDataProps {
	answers: AnswerProps[];
	levelId: number;
	questionId: number;
	isMarked: boolean;
}

export interface AnswerListActions {
	submitAnswer: (levelId: number, questionId: number, answerId: number) => void
}

export interface AnswerListProps extends AnswersListDataProps, AnswerListActions {}

function renderAnswer(answer: AnswerProps, levelId: number, questionId: number, isDisabled: boolean, submitAnswer: (levelId: number, questionId: number, answerId: number) => void) {
	if (typeof answer === "undefined") {
		return "";
	}

	const { text, id, letter, isMarked } = answer;

	return <AnswerComponent
				isDisabled={isDisabled}
				isMarked={isMarked}
				text={text}
				id={id}
				letter={letter}
				levelId={levelId}
				questionId={questionId}
				submitAnswer={submitAnswer.bind(null, levelId, questionId, id)} />;
}

export function AnswersListComponent({ answers, submitAnswer, levelId, questionId }: AnswerListProps) {
	const disableAnswers = answers.some(a => a.isMarked);

	return (
		<div>
			<div className="row" style={{ marginBottom: 10 }}>
				<div className="col-md-4">
					{renderAnswer(answers[0], levelId, questionId, disableAnswers, submitAnswer)}
				</div>
				<div className="col-md-4">
					{renderAnswer(answers[1], levelId, questionId, disableAnswers, submitAnswer)}
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					{renderAnswer(answers[2], levelId, questionId, disableAnswers, submitAnswer)}
				</div>
				<div className="col-md-4">
					{renderAnswer(answers[3], levelId, questionId, disableAnswers, submitAnswer)}
				</div>
			</div>
		</div>
	);
}
