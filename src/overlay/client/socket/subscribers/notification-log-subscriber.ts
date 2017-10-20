import { Store } from "redux";
import { addNotification } from "../../actions/notification-message-actions";
import { server, names } from "../../../../socket/actions/action-names";
import { StartGameAction } from "../../../../socket/actions/game-state-actions";

export function notificationLogSubscriber(socket: SocketIOClient.Socket, store: Store<{}>): void {
    console.log("subscribe to", server(names.START_GAME));

    socket.on(server(names.START_GAME), (action: StartGameAction) => {
        store.dispatch(addNotification(action.type, action));
    });
}