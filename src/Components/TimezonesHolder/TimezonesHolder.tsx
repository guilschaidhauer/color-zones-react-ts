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
	isLiveTime: boolean;
	timeOffsetInSeconds: number;
	handleDeleteTimezone: (timezoneName: string) => void;
}

class TimezonesHolder extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	getTimezoneColor(date: Date): timezoneColor {
    const colorIndex: number = +getHour(date, this.props.isLiveTime, this.props.timeOffsetInSeconds);
    return TimezoneStripColors[colorIndex];
  }

	render() {
		const timezones: Timezone[] = this.props.timezones;

		return (
			<div className="TimezonesHolder">
				{timezones.map((timezone) =>
					<TimezoneStrip
						key={timezone.name}
						hourString={getHour(timezone.date, this.props.isLiveTime, this.props.timeOffsetInSeconds)}
						minuteString={getMinute(timezone.name, this.props.isLiveTime, this.props.timeOffsetInSeconds)}
						dateString={getDate(timezone.name, this.props.isLiveTime, this.props.timeOffsetInSeconds)}
						timezoneName={timezone.name} width={100 / timezones.length}
						handleDeleteTimezone={this.props.handleDeleteTimezone}
						color={this.getTimezoneColor(timezone.date)} />)
				}
			</div>
		);
	}
}

export default TimezonesHolder;