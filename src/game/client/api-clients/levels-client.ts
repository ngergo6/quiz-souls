import { ServerLevel } from "../types/ServerLevel";

export function getLevels(): Promise<ServerLevel[]> {
    return fetch("/game/levels")
        .then(response => {
            if (!response.ok) {
                throw { message: response.statusText, status: response.status };
            }

            return response;
        })
        .then<ServerLevel[]>(response => response.json())
        .then(data => data.map(serverLevel => ({
            id: Number(serverLevel.id),
            score: serverLevel.score,
            text: serverLevel.text
        } as ServerLevel)));
}