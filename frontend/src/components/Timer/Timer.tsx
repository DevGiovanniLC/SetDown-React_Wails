import React, { Component, RefObject, FormEvent } from "react";
import TimeCalc from "../../services/TimeCalc";
import "./Timer.css";

class Timer extends Component {
	private $selectedTime!: RefObject<HTMLInputElement>;

	constructor(props: {}) {
		super(props);
		this.$selectedTime = React.createRef<HTMLInputElement>();
	}

	render(): React.ReactNode {
		return (
			<input
				type="time"
				step="2"
				defaultValue="00:00"
				ref={this.$selectedTime}
			/>
		);
	}

	setTimeValue(time: string) {
		this.$selectedTime.current!.value = time;
	}

	start(): void {
		if (this.$selectedTime.current) {
			const initialTime = this.$selectedTime.current.value;

			TimeCalc.start(
				initialTime,
				(time: string) => {
					this.$selectedTime.current!.value = time;
				},
				() => {
					
				}
			);
		}
	}

	stop(): void {
		TimeCalc.stop();
		this.$selectedTime.current!.value = "00:00";
	}
}

export default Timer;
