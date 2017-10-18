import { connect } from "react-redux";
import { StartScreenComponent, StartScreenComponentActions, StartScreenComponentDataProps } from "./StartScreenComponent";
import { ApplicationState } from "../../reducers/ApplicationState";
import { startGame } from "../../actions/game-state-actions";
import { setUserInfo } from "../../actions/user-info-actions";

export const StartScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(StartScreenComponent);

function mapStateToProps(state: ApplicationState, ownProps: any): StartScreenComponentDataProps {
    return {
        playerName: state.userInfo.playerName || ""
    };
}

function mapDispatchToProps(dispatch: Function): StartScreenComponentActions {
    return {
        startGame: () => dispatch(startGame()),
        setPlayerName: (playerName: string) => dispatch(setUserInfo(playerName))
    };
}