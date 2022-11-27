import React from 'react';
import './TimezonesHolder.css';
import TimezoneStrip from '../TimezoneStrip/TimezoneStrip';
import { TimezoneStripColors } from '../../Constants/TimezoneStripColors';
import { timezoneColor } from '../../Constants/TimezoneStripColors';
import { getHour } from '../../Utils/DateUtils';

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

		setTimeout(this.setWheelIsFreeToTrue.bind(this), 500);
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

	getTimezoneColor(timezoneName: string): timezoneColor {
    const colorIndex: number = +getHour(timezoneName, this.state.isLiveTime, this.state.timeOffsetInSeconds);
    return TimezoneStripColors[colorIndex];
  }

	render() {
		const timezoneNames = this.props.activeTimezoneNames;

		return (
			<div className="TimezonesHolder" onWheel={(event) => this.onWheel(event)}>
				{timezoneNames.map((timezoneName) =>
					<TimezoneStrip
						key={timezoneName}
						hourString={getHour(timezoneName, this.state.isLiveTime, this.state.timeOffsetInSeconds)}
						timezoneName={timezoneName} width={100 / timezoneNames.length}
						handleDeleteTimezone={this.props.handleDeleteTimezone}
						isLiveTime={this.state.isLiveTime}
						timeOffsetInSeconds={this.state.timeOffsetInSeconds}
						color={this.getTimezoneColor(timezoneName)} />)
				}
			</div>
		);
	}
}

export default TimezonesHolder;