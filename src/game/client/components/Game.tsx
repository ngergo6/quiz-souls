import * as React from "react";
import { CurrentQuestion } from "./CurrentQuestion";
import { Score } from "./Score";

export function Game() {
	return (
		<div>
			<div className="col-md-10">
				<CurrentQuestion />
			</div>
			<div className="col-md-2">
				<Score />
			</div>
		</div>
	);
}
