import React from 'react';
import './TimezonesHolder.css';
import TimezoneStrip from '../TimezoneStrip/TimezoneStrip';

type Props = {
	activeTimezoneNames: string[];
	handleDeleteTimezone: (timezoneName: string) => void;
}

type State = {
	isLiveTime: boolean;
	timeOffsetInSeconds: number;
}

class TimezonesHolder extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isLiveTime: true,
			timeOffsetInSeconds: 0
		};
	}

	render() {
		const timezoneNames = this.props.activeTimezoneNames;

		return (
			<div className="TimezonesHolder">
				{timezoneNames.map((timezoneName) =>
					<TimezoneStrip
						key={timezoneName}
						timezoneName={timezoneName} width={100 / timezoneNames.length}
						handleDeleteTimezone={this.props.handleDeleteTimezone} />)
				}
			</div>
		);
	}
}

export default TimezonesHolder;