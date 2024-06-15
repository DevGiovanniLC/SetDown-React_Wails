import React, { Component, RefObject } from "react";
import TimeCalculator from "../../services/TimeCalculator";
import Timer from "../../interfaces/Timer";
import { Shutdown, Reboot, Hibernate } from "../../../wailsjs/go/main/App";
import "./TimerComponent.css";
import Mode from "../../model/mode";

interface TimerComponentProps {
	mode: Mode | undefined;
}

class TimerComponent extends Component<TimerComponentProps> {
	private $selectedTime!: RefObject<HTMLInputElement>;
	private timer!: Timer;

	constructor(props: TimerComponentProps) {
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

	start(finalize: Function): boolean {
		if (this.$selectedTime?.current?.value.length != 8) return false;

		if (this.$selectedTime.current) {
			this.timer.setTimeValue(this.$selectedTime.current.value);
			this.timer.start(
				(time: string) => {
					this.$selectedTime.current!.value = time;
				},
				() => {
					this.executeMode();
					finalize();
				}
			);
		}
		return true;
	}

	private executeMode() {
		switch (this.props.mode) {
			case Mode.SHUTDOWN:
				Shutdown();
				break;
			case Mode.REBOOT:
				Reboot();
				break;
            case Mode.HIBERNATE:
                Hibernate();
                break;
			case Mode.ALARM:
				console.log("Alarm...");
				break;
			default:
				throw new Error("Unknown mode");
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
