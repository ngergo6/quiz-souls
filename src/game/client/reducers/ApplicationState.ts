import { CurrentQuestion } from "../types/CurrentQuestion";
import { ServerLevel } from "../types/ServerLevel";
import { GameState } from "../types/GameState";

export interface ApplicationState {
    currentQuestion: CurrentQuestion;
    score: number;
    levels: ServerLevel[];
    gameState: GameState;
    currentLevelId: number;
}
