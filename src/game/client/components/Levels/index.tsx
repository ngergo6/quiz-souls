import * as React from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../reducers/ApplicationState";
import { LevelsComponent, LevelsComponentActionProps, LevelsComponentDataProps, Level } from "./LevelsComponent";

export const Levels = connect(
    mapStateToProps,
    mapDispatchToProps
)(LevelsComponent);

function mapStateToProps(state: ApplicationState, ownProps: any): LevelsComponentDataProps {
    return {
        levels: state.levels.map(level => ({
            id: level.id,
            score: level.score,
            text: level.text,
            isCurrentLevel: level.id === state.currentLevelId
        } as Level))
    };
}

function mapDispatchToProps(dispatch: Function): LevelsComponentActionProps {
    return {
        
    };
}
