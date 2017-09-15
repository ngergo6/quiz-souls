import React from "react";
import { Header } from "./Header";
import { Questions } from "./Questions";

export function Main() {
	return (
		<div style={{ display: "flex", flexDirection: "row", width: "100%", height: "100%", position: "absolute" }}>
			<div style={{ flexDirection: "column", flex: 6 }}>
				<div style={{ flex: 1 }}>
					<Header />
				</div>
				<div style={{ flex: 8 }}>
                    <Questions />
                </div>
			</div>
			<div style={{ flex: 1 }}>sidebar</div>
		</div>
	);
}
