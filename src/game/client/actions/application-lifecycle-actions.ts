import { APPLICATION_START } from "./action-names";
import { fetchLevels } from "./levels-actions";
import { loadQuestion } from "./current-question-actions";
import { initGame } from "./game-state-actions";

export function startApplication(): Function {
    return (dispatch: Function) => {
        dispatch(initGame());
        dispatch(fetchLevels());
        dispatch(loadQuestion(0));
    };
}