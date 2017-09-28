import { connect } from "react-redux";
import { ApplicationState } from "../../reducers/index";
import { AnswersListComponent } from "./AnswersListComponent";

export const CurrentAnswers = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnswersListComponent);

function mapStateToProps(state: ApplicationState) {
    const a = "A".charCodeAt(0);

    return {
        answers: state.currentQuestion.answers.map((answer, index) => ({
            text: answer.text,
            id: answer.id,
            letter: String.fromCharCode(a + index)
        }))
    };
}

function mapDispatchToProps(dispatch: Function) {
    return {
        
    }
}