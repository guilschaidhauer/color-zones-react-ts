import React from 'react';
import './TimezonesHolder.css';
import TimezoneStrip from '../TimezoneStrip/TimezoneStrip';

class TimezonesHolder extends React.Component {

	render() {
		const timezoneNames: string[] = ['Asia/Tokyo', 'Europe/Rome', 'America/Sao_Paulo'];

		return (
			<div className="TimezonesHolder">
				<TimezoneStrip timezoneName={timezoneNames[0]} width={100 / timezoneNames.length} />
				<TimezoneStrip timezoneName={timezoneNames[1]} width={100 / timezoneNames.length} />
				<TimezoneStrip timezoneName={timezoneNames[2]} width={100 / timezoneNames.length} />
			</div>
		);
	}
}

export default TimezonesHolder;