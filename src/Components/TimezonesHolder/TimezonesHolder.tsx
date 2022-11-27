import React from 'react';
import './TimezonesHolder.css';
import TimezoneStrip from '../TimezoneStrip/TimezoneStrip';
import { TimezoneStripColors } from '../../Constants/TimezoneStripColors';
import { timezoneColor } from '../../Constants/TimezoneStripColors';
import { getHour } from '../../Utils/DateUtils';
import { getMinute } from '../../Utils/DateUtils';
import { getDate } from '../../Utils/DateUtils';
import { Timezone } from '../../Utils/SettingsUtils';

type Props = {
	timezones: Timezone[];
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
		const timezones: Timezone[] = this.props.timezones;

		return (
			<div className="TimezonesHolder" onWheel={(event) => this.onWheel(event)}>
				{timezones.map((timezone) =>
					<TimezoneStrip
						key={timezone.name}
						hourString={getHour(timezone.name, this.state.isLiveTime, this.state.timeOffsetInSeconds)}
						minuteString={getMinute(timezone.name, this.state.isLiveTime, this.state.timeOffsetInSeconds)}
						dateString={getDate(timezone.name, this.state.isLiveTime, this.state.timeOffsetInSeconds)}
						timezoneName={timezone.name} width={100 / timezone.name.length}
						handleDeleteTimezone={this.props.handleDeleteTimezone}
						color={this.getTimezoneColor(timezone.name)} />)
				}
			</div>
		);
	}
}

export default TimezonesHolder;