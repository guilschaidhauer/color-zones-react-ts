import React from 'react';
import './TimezonesHolder.css';
import TimezoneStrip from '../TimezoneStrip/TimezoneStrip';

type Props = {
	activeTimezoneNames: string[];
	handleDeleteTimezone: (timezoneName: string) => void;
}

type State = {
	isLiveTime: boolean;
	timeOffsetInSeconds: number;
	wheelIsFree: boolean;
}

class TimezonesHolder extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isLiveTime: true,
			timeOffsetInSeconds: 0,
			wheelIsFree: true
		};
	}

	addTimeOffset(offsetInSeconds: number) {
		this.setState({
			isLiveTime: false,
			wheelIsFree: false,
			timeOffsetInSeconds: this.state.timeOffsetInSeconds + offsetInSeconds
		});

		//refreshTimeForAllCards();

		setTimeout(this.setWheelIsFreeToTrue.bind(this), 250);
	}

	setWheelIsFreeToTrue(): void {
		this.setState({
			wheelIsFree: true
		});
	}

	onWheel(event: React.WheelEvent): void {
		if (this.state.wheelIsFree && event.deltaY < -49) {
			this.addTimeOffset(3600);
		} else if (this.state.wheelIsFree && event.deltaY > 49) {
			this.addTimeOffset(-3600);
		}
	}

	render() {
		const timezoneNames = this.props.activeTimezoneNames;

		return (
			<div className="TimezonesHolder" onWheel={(event) => this.onWheel(event)}>
				{timezoneNames.map((timezoneName) =>
					<TimezoneStrip
						key={timezoneName}
						timezoneName={timezoneName} width={100 / timezoneNames.length}
						handleDeleteTimezone={this.props.handleDeleteTimezone}
						isLiveTime={this.state.isLiveTime}
						timeOffsetInSeconds={this.state.timeOffsetInSeconds} />)
				}
			</div>
		);
	}
}

export default TimezonesHolder;