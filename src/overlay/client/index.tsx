import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Main } from "./components/Main";
import { reducers } from "./reducers";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

document.addEventListener("DOMContentLoaded", bootstrap);

function bootstrap() {
	const store = createStore(reducers, applyMiddleware(thunk));

	render(
		<Provider store={store}>
			<Main />
		</Provider>,
		document.getElementById("app")
	);

    // todo: dispatch init action
}
