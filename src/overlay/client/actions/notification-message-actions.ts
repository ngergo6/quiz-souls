import { Action } from "../types/Action";
import { ADD_NOTIFICATION_MESSAGE } from "./action-names";

export interface NotificationAction extends Action {
    notification: {
        type: string,
        data: any;
    }
}

export function addNotification(notificationType: string, data: any): NotificationAction {
    return {
        type: ADD_NOTIFICATION_MESSAGE,
        notification: {
            data,
            type: notificationType
        }
    };
}