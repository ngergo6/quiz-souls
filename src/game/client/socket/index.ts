import * as io from "socket.io-client";
import { Action } from "../types/Action";

const socket = io();

export function connect(userId): Promise<void> {
    return new Promise(resolve => {
        socket.connect();
        
        socket.on("connect", () => {
            socket.emit("$_join_room", userId);
            
            resolve();
        });
    })
}

export function dispatchSocket(action: Action): void {
    socket.emit(`${action.type}`, action);
}