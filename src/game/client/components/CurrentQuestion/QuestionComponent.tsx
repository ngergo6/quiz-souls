import * as propTypes from "prop-types";
import * as React from "react";
import { PropTypesValidator } from "../../types/PropTypesValidator";

export interface QuestionProps {
	level: number;
	text: string;
	answers: any[];
}

function renderAnswers(answers: any[]) {
	return answers.map(({ text, id }: any, key: number) => {
		return (
			<button>
				{text}
			</button>
		);
	});
}

export function QuestionComponent({ level, answers, text }: QuestionProps) {
	return (
		<div style={{ flexDirection: "row" }}>
			<div style={{ flex: 3 }}>{text}</div>
			<div style={{ flex: 2 }}>{renderAnswers(answers)}</div>
		</div>
	);
}

QuestionComponent["propTypes"] = {
	level: propTypes.number.isRequired,
	answers: propTypes.array.isRequired,
	text: propTypes.string.isRequired
} as PropTypesValidator<QuestionProps>;