import { CurrentQuestion } from "./current-question-reducer";

export interface ApplicationState {
    currentQuestion: CurrentQuestion,
    score: number
}
