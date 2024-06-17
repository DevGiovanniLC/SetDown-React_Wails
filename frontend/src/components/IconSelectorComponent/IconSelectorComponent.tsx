import React, { Component } from "react";
import Mode from "../../model/mode";
import ShutdownIcon from "../../assets/images/shutdown.webp"
import RebootIcon from "../../assets/images/reboot.webp"
import HibernateIcon from "../../assets/images/hibernate.webp"
//import LogOutIcon from "../../assets/images/logout.webp"
import AlarmIcon from "../../assets/images/alarm.webp"
import "./IconSelectorComponent.css";


class IconSelectorComponent extends Component {

    private actualMode: Mode = Mode.SHUTDOWN;

    constructor(props: {}) {
        super(props);
    }

	render(): React.ReactNode {
		return (
			<form className="selector">
				<label>
					<input
						type="radio"
						className="icon"
						title="Shutdown"
						name="action"
                        defaultChecked={true}
                        onChange={() => this.actualMode = Mode.SHUTDOWN}
					/>
                    <img src={ShutdownIcon} alt="shutdown icon" />
				</label>
				<label>
					<input
						type="radio"
						className="icon"
						title="Reboot"
						name="action"
                        onChange={() => this.actualMode = Mode.REBOOT}
					/>
                    <img src={RebootIcon} alt="reboot icon" />
				</label>
				<label>
					<input
						type="radio"
						className="icon"
						title="Hibernate"
						name="action"
                        onChange={() => this.actualMode = Mode.HIBERNATE}
					/>
                    <img src={HibernateIcon} alt="reboot icon" />
				</label>
			</form>
		);
	}

    getValueChecked() {
        return this.actualMode
    }
}

export default IconSelectorComponent;
