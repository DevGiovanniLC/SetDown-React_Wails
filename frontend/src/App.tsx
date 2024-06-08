import React, { Component, RefObject } from "react";
import TimerComponent from "./components/TimerComponent/TimerComponent";
import "./App.css";


interface AppProps {}
interface AppState {
    buttonClass: string
    buttonContent: string
}

class App extends Component<AppProps , AppState> {
	private timer: RefObject<TimerComponent>;

	constructor(props: {}) {
		super(props);
		this.timer = React.createRef<TimerComponent>();
		this.handleToggle = this.handleToggle.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
        this.state = {
            buttonClass: "startButton",
            buttonContent: "⏵"
        }
	}

	render(): React.ReactNode {
		return (
			<main id="App">
				<TimerComponent ref={this.timer}></TimerComponent>
				<div className="buttons">
					<button onClick={this.handleToggle} className={this.state.buttonClass}>{ this.state.buttonContent}</button>
					<button onClick={this.handleCancel} className="cancelButton">⏹</button>
				</div>
			</main>
		);
	}

	private handleToggle(): void {
        if (this.timer.current?.getTimeValue() === "00:00") return
        console.log("llega")
        this.timer.current?.isExecuting() ? this.pauseTimer() : this.startTimer()
	}

    private pauseTimer() {
        this.timer.current?.pause();
        this.setState({buttonContent: "⏵", buttonClass: "startButton"});
    }

    private startTimer() {
        this.timer.current?.start();
        this.setState({buttonContent: "⏸", buttonClass: "pauseButton"});
    }

	private handleCancel(): void {
		this.timer.current?.stop();
        this.setState({buttonContent: "⏵", buttonClass: "startButton"});
	}
}

export default App;
