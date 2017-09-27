import { connect } from "react-redux";
import { QuestionComponent, QuestionProps } from "./QuestionComponent";
import { ApplicationState } from "../../reducers";

export const CurrentQuestion = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionComponent);

function mapStateToProps(state: ApplicationState, ownProps: any) {
    //return state.currentQuestion;
    return {
        answers: ["1", "2", "3", "4"],
        level: 1,
        text: "ok"
    } as QuestionProps;
}

function mapDispatchToProps(dispatch: Function) {
    return {

    };
}