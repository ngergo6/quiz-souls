import { connect } from "react-redux";
import { ScoreComponent, ScoreProps } from "./ScoreComponent";
import { ApplicationState } from "../../reducers/ApplicationState";

export const Score = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScoreComponent);

function mapStateToProps(state: ApplicationState, ownProps: any) {
    return {
        score: state.score
    };
}

function mapDispatchToProps() {
    return {

    };
}