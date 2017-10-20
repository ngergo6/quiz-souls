import { Action } from "./Action";

export interface StartGameAction extends Action {
    userId: string;
    playerName: string;
}