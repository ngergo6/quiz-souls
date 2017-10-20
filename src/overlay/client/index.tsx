import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Main } from "./components/Main";
import { createStore, applyMiddleware, Store } from "redux";
import { reducers } from "./reducers";
import thunk from "redux-thunk";
import { subscribeToSocket } from "./socket";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

document.addEventListener("DOMContentLoaded", bootstrap);

function bootstrap() {
	const store = createStore(reducers, applyMiddleware(thunk));
	subscribeToSocket(store);

	render(
		<Provider store={store}>
			<Main />
		</Provider>,
		document.getElementById("app")
	);

    // todo: dispatch init action
}
