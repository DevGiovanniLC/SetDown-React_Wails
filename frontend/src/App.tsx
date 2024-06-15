import React, { Component, RefObject } from "react";
import TimerComponent from "./components/TimerComponent/TimerComponent";
import IconSelectorComponent from "./components/IconSelectorComponent/IconSelectorComponent";
import "./App.css";

interface AppProps {}
interface AppState {
	buttonClass: string;
	buttonContent: string;
}

class App extends Component<AppProps, AppState> {
	private timer: RefObject<TimerComponent>;
	private modeSelector: React.RefObject<IconSelectorComponent>;

	constructor(props: {}) {
		super(props);
		this.timer = React.createRef<TimerComponent>();
		this.modeSelector = React.createRef<IconSelectorComponent>();

		this.handleToggle = this.handleToggle.bind(this);
		this.handleCancel = this.handleCancel.bind(this);

		this.state = {
			buttonClass: "startButton",
			buttonContent: "⏵",
		};
	}

	render(): React.ReactNode {
		return (
			<main id="App">
				<TimerComponent
					mode={this.modeSelector.current?.getValueChecked()}
					ref={this.timer}
				/>
				<IconSelectorComponent ref={this.modeSelector} />
				<div className="buttons">
					<button
						onClick={this.handleToggle}
						className={this.state.buttonClass}
					>
						{this.state.buttonContent}
					</button>
					<button
						onClick={this.handleCancel}
						className="cancelButton"
					>
						⏹
					</button>
				</div>
			</main>
		);
	}

	private handleToggle(): void {
		if (this.timer.current?.getTimeValue() === "00:00") return;
		this.timer.current?.isExecuting()
			? this.pauseTimer()
			: this.startTimer();
	}

	private pauseTimer() {
		this.timer.current?.pause();
		this.pausedState();
	}

	private startTimer() {
		const isStarted = this.timer.current?.start(() => {
			this.setState({
				buttonContent: "⏵",
				buttonClass: "startButton",
			});
		});

		if (isStarted) this.startedState()
	}

	private handleCancel(): void {
		this.timer.current?.stop();
		this.pausedState();
	}



    private pausedState() {
        this.setState({ buttonContent: "⏵", buttonClass: "startButton" });
    }

    private startedState() {
        this.setState({ buttonContent: "⏸", buttonClass: "pauseButton" });
    }
}

export default App;
