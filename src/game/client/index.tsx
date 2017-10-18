import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Main } from "./components/Main";
import { reducers } from "./reducers";
import { initGame } from "./actions/game-state-actions";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

document.addEventListener("DOMContentLoaded", bootstrap);

function bootstrap() {
	const composeEnhancers =
		typeof window === 'object' &&
		window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] ?   
		window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({
			// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		}) : compose;

	const enhancer = composeEnhancers(applyMiddleware(thunk));

	const store = createStore(reducers, enhancer);

	render(
		<Provider store={store}>
			<Main />
		</Provider>,
		document.getElementById("app")
	);

	store.dispatch(initGame() as any);
}
