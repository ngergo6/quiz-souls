import * as React from "react";
import { Header } from "./Header";
import { CurrentQuestion } from "./CurrentQuestion";
import { Score } from "./Score";

export function Main() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-10">
					<Header />
					<CurrentQuestion />
				</div>
				<div className="col-md-2">
					<Score />
				</div>
			</div>
		</div>
	);
}
