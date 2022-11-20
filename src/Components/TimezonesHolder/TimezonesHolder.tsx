import React from 'react';
import './TimezonesHolder.css';
import TimezoneStrip from '../TimezoneStrip/TimezoneStrip';

class TimezonesHolder extends React.Component {

	render() {
		const timezoneNames: string[] = ['Asia/Tokyo', 'Europe/Rome', 'America/Sao_Paulo'];

		return (
			<div className="TimezonesHolder">
				{timezoneNames.map((timezoneName) =>
					<TimezoneStrip key={timezoneName} timezoneName={timezoneName} width={100 / timezoneNames.length} />)
				}
			</div>
		);
	}
}

export default TimezonesHolder;