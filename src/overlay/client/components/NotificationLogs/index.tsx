import * as React from "react";
import { connect } from "react-redux";
import { NotificationLogComponent, NotificationLogComponentDataProps, NotificationLogComponentActionProps } from "./NotificationLogComponent";
import { ApplicationState } from "../../reducers/ApplicationState";

export const NotificationLog = connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationLogComponent);

function mapStateToProps(state: ApplicationState, ownProps: any): NotificationLogComponentDataProps {
    return {
        notifications: state.notificationMessages
    };
}

function mapDispatchToProps(dispatch: Function, getState: () => any): NotificationLogComponentActionProps {
    return {

    };
}