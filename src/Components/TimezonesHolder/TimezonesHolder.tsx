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
		const timezoneNames = this.props.activeTimezoneNames;

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