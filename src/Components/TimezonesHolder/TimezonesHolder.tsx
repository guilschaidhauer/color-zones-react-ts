import React from 'react';
import TimezoneStrip from '../TimezoneStrip/TimezoneStrip';

class TimezonesHolder extends React.Component {

	render() {
		const timezoneNames: string[] = ['Asia/Tokyo', 'Europe/Rome', 'America/Sao_Paulo'];

		return (
			<div className="TimezonesHolder">
				<TimezoneStrip timezoneName={timezoneNames[0]} />
				<TimezoneStrip timezoneName={timezoneNames[1]} />
				<TimezoneStrip timezoneName={timezoneNames[2]} />
			</div>
		);
	}
}

export default TimezonesHolder;