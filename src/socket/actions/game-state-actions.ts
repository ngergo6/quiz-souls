import { Action } from "./Action";

export interface StartGameAction extends Action {
    playerName: string;
}

export interface EndGameAction extends Action {
    score: number;
}