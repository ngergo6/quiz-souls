import { combineReducers } from "redux";
import { notificationMessageReducer } from "./notification-message-reducer";

export const reducers = combineReducers({
    notificationMessages: notificationMessageReducer
});