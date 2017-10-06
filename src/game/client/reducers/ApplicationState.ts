import { CurrentQuestion } from "./current-question-reducer";
import { ServerLevel } from "../types/ServerLevel";

export interface ApplicationState {
    currentQuestion: CurrentQuestion,
    score: number,
    levels: ServerLevel[]
}
