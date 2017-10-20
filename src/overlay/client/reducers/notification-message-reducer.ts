import { Action } from "../types/Action";
import { NotificationMessage } from "../types/NotificationMessage"
import { ADD_NOTIFICATION_MESSAGE } from "../actions/action-names";
import { NotificationAction } from "../actions/notification-message-actions";

export function notificationMessageReducer(state: NotificationMessage[] = [], action: Action): NotificationMessage[] {
    switch(action.type) {
        case ADD_NOTIFICATION_MESSAGE:
            return addNotificationMessage(state, action as NotificationAction);
        default:
            return state;
    }
}

function addNotificationMessage(state: NotificationMessage[], action: NotificationAction): NotificationMessage[] {
    return [...state, {
        type: action.notification.type,
        data: action.notification.data
    }];
}