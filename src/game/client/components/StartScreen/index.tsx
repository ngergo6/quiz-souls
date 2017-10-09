import { connect } from "react-redux";
import { StartScreenComponent, StartScreenComponentActions, StartScreenComponentDataProps } from "./StartScreenComponent";
import { ApplicationState } from "../../reducers/ApplicationState";
import { startGame } from "../../actions/game-state-actions";

export const StartScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(StartScreenComponent);

function mapStateToProps(state: ApplicationState, ownProps: any): StartScreenComponentDataProps {
    return {
        
    };
}

function mapDispatchToProps(dispatch: Function): StartScreenComponentActions {
    return {
        startGame: () => dispatch(startGame())
    };
}