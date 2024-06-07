import React, { Component, RefObject } from "react";
import { Greet } from "../wailsjs/go/main/App";
import Timer from "./components/Timer/Timer";

class App extends Component {
	timer: RefObject<Timer>;

	constructor(props: {}) {
		super(props);
		this.timer = React.createRef<Timer>();
		this.handleAccept = this.handleAccept.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}

	render(): React.ReactNode {
		return (
			<div id="App">
				<Timer ref={this.timer}></Timer>
				<button onClick={this.handleAccept}>Accept</button>
				<button onClick={this.handleCancel}>Cancel</button>
			</div>
		);
	}

	handleAccept(): void {
		this.timer.current?.start();
	}

	handleCancel(): void {
		this.timer.current?.stop();
	}
}

export default App;
