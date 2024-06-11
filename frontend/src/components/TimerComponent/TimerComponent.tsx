import React, { Component, RefObject, FormEvent } from "react";
import TimeCalculator from "../../services/TimeCalculator";
import Timer from "../../interfaces/Timer";
import { Shutdown } from "../../../wailsjs/go/main/App";
import "./TimerComponent.css";

class TimerComponent extends Component {
	private $selectedTime!: RefObject<HTMLInputElement>;
	private timer!: Timer;

	constructor(props: {}) {
		super(props);
		this.$selectedTime = React.createRef<HTMLInputElement>();
		this.timer = new TimeCalculator();
	}

	render(): React.ReactNode {
		return (
			<>
				<input
					type="time"
					className="time-input"
					step="2"
					defaultValue="00:00"
					ref={this.$selectedTime}
				/>


			</>
		);
	}

	setTimeValue(time: string) {
		this.timer.setTimeValue(time);
		this.$selectedTime.current!.value = time;
	}

	getTimeValue() {
		return this.$selectedTime.current!.value;
	}

	start(): void {
		if (this.$selectedTime.current) {
			this.timer.setTimeValue(this.$selectedTime.current.value);
			console.log(this.$selectedTime.current.value);
			this.timer.start(
				(time: string) => {
					this.$selectedTime.current!.value = time;
				},
				() => {
					Shutdown();
				}
			);
		}
	}

	pause(): void {
		this.timer.pause();
	}

	stop(): void {
		this.timer.stop();
		this.$selectedTime.current!.value = this.timer.getTimeValue();
	}

	isExecuting(): boolean {
		return this.timer.isExecuting();
	}
}

export default TimerComponent;
