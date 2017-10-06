import { APPLICATION_START } from "./action-names";
import { fetchLevels } from "./levels-actions";
import { loadQuestion } from "./current-question-actions";

export function startApplication(): Function {
    return (dispatch: Function) => {
        dispatch(fetchLevels());
        dispatch(loadQuestion(0));
    };
}