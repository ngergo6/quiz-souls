import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Main } from "./components/Main";
import { reducers } from "./reducers";
import { loadQuestion } from "./actions/current-question-actions";

document.addEventListener("DOMContentLoaded", bootstrap);

function bootstrap() {
	const store = createStore(reducers, applyMiddleware(thunk));

	render(
		<Provider store={store}>
			<Main />
		</Provider>,
		document.getElementById("app")
	);

	store.dispatch(loadQuestion(0) as any);
}
