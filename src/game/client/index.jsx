import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Main } from "./components/Main";
import { reducers } from "./reducers";

document.addEventListener("DOMContentLoaded", bootstrap);

function bootstrap() {
	const store = createStore(reducers);

	render(
		<Provider store={store}>
			<Main />
		</Provider>,
		document.getElementById("app")
	);
}
