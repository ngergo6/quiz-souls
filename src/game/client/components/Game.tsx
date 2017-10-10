import * as React from "react";
import { CurrentQuestion } from "./CurrentQuestion";
import { Score } from "./Score";
import { Levels } from "./Levels";

export function Game() {
	return (
		<div>
			<div className="col-md-10">
				<CurrentQuestion />
			</div>
			<div className="col-md-2">
				<Score />
				<Levels />
			</div>
		</div>
	);
}
