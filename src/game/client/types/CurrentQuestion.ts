import { Answer } from "./Answer";

export interface CurrentQuestion {
    text: string;
    answers: Answer[];
    level: number;
    id: number;
}