import * as io from "socket.io-client";
import { subscribers } from "./subscribers";
import { Store } from "redux";

export function subscribeToSocket(store: Store<{}>) {
    const socket = io();
    
    socket.connect();
    
    subscribers.forEach(subscribe => subscribe(socket, store));
}
