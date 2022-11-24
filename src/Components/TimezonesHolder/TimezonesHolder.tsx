import React from 'react';
import './TimezonesHolder.css';
import TimezoneStrip from '../TimezoneStrip/TimezoneStrip';

type Props = {
	activeTimezoneNames: string[];
}

class TimezonesHolder extends React.Component<Props> {
	constructor(props: Props) {
    super(props);
  }

	render() {
		//const timezoneNames: string[] = ['Asia/Tokyo', 'Europe/Rome', 'America/Sao_Paulo'];

		return (
			<div className="TimezonesHolder">
				{this.props.activeTimezoneNames.map((timezoneName) =>
					<TimezoneStrip key={timezoneName} timezoneName={timezoneName} width={100 / this.props.activeTimezoneNames.length} />)
				}
			</div>
		);
	}
}

export default TimezonesHolder;