import * as React from "react";
import { connect } from "react-redux";
import { MainComponent, MainComponentDataProps, MainComponentActionProps } from "./MainComponent";
import { ApplicationState } from "../../reducers/ApplicationState";
import { GameState } from "../../types/GameState";
import { StartScreen } from "../StartScreen";
import { Game } from "../Game";

export const Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);

function mapStateToProps(state: ApplicationState, ownProps: any): MainComponentDataProps {
    const activeComponent = getActiveComponent(state.gameState);

    return {
        activeComponent
    };
}

function mapDispatchToProps(): MainComponentActionProps {
    return {

    };
}

function getActiveComponent(gameState: GameState): React.ReactElement<any> {
	if (gameState === "not-started-yet") {
		return <StartScreen />;
	} else if (gameState === "running") {
		return <Game />;
	} else {
		// todo: handle other cases
		return <StartScreen />;
	}
}