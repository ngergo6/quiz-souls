import * as io from "socket.io-client";
import { Action } from "../types/Action";

const socket = io();

socket.connect();

export function dispatchSocket(action: Action): void {
    socket.emit(`${action.type}`, action);
}