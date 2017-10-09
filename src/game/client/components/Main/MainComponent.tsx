import * as React from "react";
import { Game } from "../Game";
import { StartScreen } from "../StartScreen";

export interface MainComponentDataProps {
	activeComponent: React.ReactElement<any>
}

export interface MainComponentActionProps {

}

export interface MainComponentProps extends MainComponentActionProps, MainComponentDataProps {}

export function MainComponent({ activeComponent }: MainComponentProps) {
	return (
		<div className="container">
			<div className="row">
				{ activeComponent }
			</div>
		</div>
	);
}
