import * as io from "socket.io-client";
import { subscribers } from "./subscribers";
import { Store } from "redux";

export function subscribeToSocket(store: Store<{}>) {
    const socket = io();
    
    socket.connect();

    socket.on("connect", () => {
        const urlParams = new URLSearchParams(window.location.search);
        
        socket.emit("$_join_room", urlParams.get("userId"));

        subscribers.forEach(subscribe => subscribe(socket, store));
    });
}
