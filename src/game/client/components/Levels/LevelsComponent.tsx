import * as React from "react";
import { ServerLevel } from "../../types/ServerLevel";

export interface Level extends ServerLevel {
    isCurrentLevel: boolean
}

export interface LevelsComponentDataProps {
    levels: Level[];
}

export interface LevelsComponentActionProps {

}

interface LevelsComponentProps extends LevelsComponentActionProps, LevelsComponentDataProps { }

export function LevelsComponent({ levels }: LevelsComponentProps) {
    const levelElements = levels.map(renderLevel);

    return (
        <div>
            {levelElements}
        </div>
    );
}

function renderLevel(level: Level, index: number) {
    return (
        <div key={index} className={`row${level.isCurrentLevel ? " alert alert-primary" : ""}`}>
            <div className="col-xs-6">{level.text}</div>
            <div className="col-xs-3">{level.score}</div>
        </div>
    );
}