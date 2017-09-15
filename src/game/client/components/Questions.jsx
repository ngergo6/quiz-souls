import React, { Component } from "react";

export class Questions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{flexDirection: "row"}}>
                <div style={{flex: 3}}>question</div>
                <div style={{flex: 2}}>answer</div>
            </div>
        );
    }
}