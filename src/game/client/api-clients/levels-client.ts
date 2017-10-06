import { ServerLevel } from "../types/ServerLevel";

export function getLevels(): Promise<ServerLevel[]> {
    return fetch("/game/levels")
        .then(response => {
            if (!response.ok) {
                throw { message: response.statusText, status: response.status };
            }

            return response;
        })
        .then(response => response.json());
}