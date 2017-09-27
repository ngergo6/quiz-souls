import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "react-thunk";
import { Main } from "./components/Main";
import { reducers } from "./reducers";

document.addEventListener("DOMContentLoaded", bootstrap);

function bootstrap() {
	const store = createStore(reducers, applyMiddleware(thunk));

	render(
		<Provider store={store}>
			<Main />
		</Provider>,
		document.getElementById("app")
	);
}
