import React from 'react';
import TimezoneTime from '../TimezoneTime/TimezoneTime';

class TimezonesHolder extends React.Component {

	render() {
		const timezoneNames: string[] = ['Asia/Tokyo', 'Europe/Rome'];

		return (
			<div className="TimezonesHolder">
				<TimezoneTime timezoneName={timezoneNames[0]} />
				<TimezoneTime timezoneName={timezoneNames[1]} />
			</div>
		);
	}
}

export default TimezonesHolder;