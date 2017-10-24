import { Store } from "redux";
import { addNotification } from "../../actions/notification-message-actions";
import { server, names } from "../../../../socket/actions/action-names";
import { StartGameAction } from "../../../../socket/actions/game-state-actions";

export function notificationLogSubscriber(socket: SocketIOClient.Socket, store: Store<{}>): void {
    const subscribe = makeSubscriber(socket, store);

    subscribe(names.START_GAME);
    subscribe(names.LOSE_GAME);
    subscribe(names.WIN_GAME);
}

function makeSubscriber(socket: SocketIOClient.Socket, store: Store<{}>) {
    return function(actionName: string) {
        socket.on(server(actionName), action => {
            store.dispatch(addNotification(action.type, action));
        });
    }
}