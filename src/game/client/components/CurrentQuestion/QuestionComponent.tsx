import * as propTypes from "prop-types";
import * as React from "react";
import { PropTypesValidator } from "../../types/PropTypesValidator";
import { CurrentAnswers } from "../CurrentAnswers";

export interface QuestionProps {
	level: number;
	text: string;
	answers: any[];
}

export function QuestionComponent({ level, answers, text }: QuestionProps) {
	return (
		<div style={{ flexDirection: "row" }}>
			<div style={{ flex: 3 }}>{text}</div>
			<CurrentAnswers />
		</div>
	);
}

QuestionComponent["propTypes"] = {
	level: propTypes.number.isRequired,
	answers: propTypes.array.isRequired,
	text: propTypes.string.isRequired
} as PropTypesValidator<QuestionProps>;