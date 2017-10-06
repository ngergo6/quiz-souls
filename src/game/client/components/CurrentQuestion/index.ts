import { connect } from "react-redux";
import { QuestionComponent, QuestionProps } from "./QuestionComponent";
import { ApplicationState } from "../../reducers/ApplicationState";

export const CurrentQuestion = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionComponent);

function mapStateToProps(state: ApplicationState, ownProps: any) {
    return state.currentQuestion;
}

function mapDispatchToProps(dispatch: Function) {
    return {

    };
}