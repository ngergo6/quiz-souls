import { CurrentQuestion } from "./current-question-reducer";
import { ServerLevel } from "../types/ServerLevel";
import { GameState } from "../types/GameState";

export interface ApplicationState {
    currentQuestion: CurrentQuestion;
    score: number;
    levels: ServerLevel[];
    gameState: GameState;
    currentLevelId: number;
}
