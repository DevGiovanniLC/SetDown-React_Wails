import React, { Component, RefObject, FormEvent } from "react";
import ShutdownIcon from "../../assets/images/shutdown.webp"
import RebootIcon from "../../assets/images/reboot.webp"
//import HibernateIcon from "../../assets/images/hibernate.webp"
//import LogOutIcon from "../../assets/images/logout.webp"
import AlarmIcon from "../../assets/images/alarm.webp"
import "./IconSelectorComponent.css";

class IconSelectorComponent extends Component {
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
					/>
                    <img src={ShutdownIcon} alt="shutdown icon" />
				</label>
				<label>
					<input
						type="radio"
						className="icon"
						title="Reboot"
						name="action"
					/>
                    <img src={RebootIcon} alt="reboot icon" />
				</label>
				<label>
					<input
						type="radio"
						className="icon"
						title="Alarm"
						name="action"
					/>
                    <img src={AlarmIcon} alt="alarm icon" />
				</label>
			</form>
		);
	}
}

export default IconSelectorComponent;
