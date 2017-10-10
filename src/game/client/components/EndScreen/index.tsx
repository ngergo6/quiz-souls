import * as React from "react";
import { connect } from "react-redux";
import { EndScreenComponent, EndScreenComponentActions, EndScreenComponentDataProps } from "./EndScreenComponent";
import { ApplicationState } from "../../reducers/ApplicationState";
import { initGame } from "../../actions/game-state-actions";
import { GameState } from "../../types/GameState";
import { LostComponent } from "./LostComponent";
import { WonComponent } from "./WonComponent";

export const EndScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(EndScreenComponent);

function mapStateToProps(state: ApplicationState, ownProps: any): EndScreenComponentDataProps {
    return {
        resultComponent: getEndScreen(state.gameState, state.score)
    } as EndScreenComponentDataProps;
}

function mapDispatchToProps(dispatch: Function): EndScreenComponentActions {
    return {
        restartGame: () => dispatch(initGame())
    } as EndScreenComponentActions;
}

function getEndScreen(gameState: GameState, score: number): React.ReactElement<any> {
    switch (gameState) {
        case "game-over-won":
            return <WonComponent score={score} />
        case "game-over-lost":
            return <LostComponent />
        default:
            <div />
    }
}