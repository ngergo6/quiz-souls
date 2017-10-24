import { Action } from "./Action";

export interface AddScoreAction extends Action {
    score: number;
}