import { connect } from "react-redux";
import { ApplicationState } from "../../reducers/index";
import { AnswersListComponent, AnswersListDataProps, AnswerListActions } from "./AnswersListComponent";
import { AnswerProps } from "./AnswerComponent";
import { checkAnswer } from "../../actions/current-question-actions";

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
            letter: String.fromCharCode(a + index),
            levelId: state.currentQuestion.level,
            questionId: state.currentQuestion.id
        }))
    } as AnswersListDataProps;
}

function mapDispatchToProps(dispatch: Function) {
    return {
        submitAnswer: (levelId: number, questionId: number, answerId: number) => { 
            dispatch(checkAnswer(levelId, questionId, answerId));
        }
    } as AnswerListActions;
}