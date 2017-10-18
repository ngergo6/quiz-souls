import { AnswerMarkTypes } from "./AnswerMarkTypes";

export interface Answer {
    text: string;
    id: number;
    markedAs: AnswerMarkTypes;
}