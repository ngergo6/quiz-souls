export interface ServerQuestion {
    id: number,
    text: string;
    answers: ServerAnswer[]
}

export interface ServerAnswer {
    id: number;
    text: string;
}