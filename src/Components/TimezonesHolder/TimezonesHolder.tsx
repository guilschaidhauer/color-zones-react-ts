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

class TimezonesHolder extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	getTimezoneColor(date: Date): timezoneColor {
    const colorIndex: number = +getHour(date) - 1;
    return TimezoneStripColors[colorIndex];
  }

	render() {
		const timezones: Timezone[] = this.props.timezones;

		return (
			<div className="TimezonesHolder">
				{timezones.map((timezone) =>
					<TimezoneStrip
						key={timezone.name}
						hourString={getHour(timezone.date)}
						minuteString={getMinute(timezone.date, timezone.name)}
						dateString={getDate(timezone.date)}
						timezoneName={timezone.name} width={100 / timezones.length}
						handleDeleteTimezone={this.props.handleDeleteTimezone}
						color={this.getTimezoneColor(timezone.date)} />)
				}
			</div>
		);
	}
}

export default TimezonesHolder;