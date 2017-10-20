import * as React from "react";
import { NotificationMessage } from "../../types/NotificationMessage";

export interface NotificationLogComponentDataProps {
    notifications: NotificationMessage[];
}

export interface NotificationLogComponentActionProps {

}

export interface NotificationLogComponentProps extends NotificationLogComponentDataProps, NotificationLogComponentActionProps {}

export function NotificationLogComponent({notifications}: NotificationLogComponentProps) {
    const rows = notifications.map(renderNotificationMessage);

    return (
        <div>
            <h3>Notifications</h3>
            <table style={{ width: "100%" }}>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

function renderNotificationMessage(message: NotificationMessage, key: number) {
    return (
        <tr key={key}>
            <td>{message.type}</td>
            <td>{JSON.stringify(message.data)}</td>
        </tr>
    );
}