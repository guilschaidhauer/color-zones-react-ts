import React from 'react';
import Hour from '../Hour/Hour';
import Colon from '../Colon/Colon';
import Minute from '../Minute/Minute';
import './TimezoneTime.css'

type Props = {
	timezoneName: string;
	isLiveTime: boolean;
	timeOffsetInSeconds: number;
}

class TimezoneTime extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		return (
			<div className="TimezoneTime">
				<Hour
					timezoneName={this.props.timezoneName}
					customClassName='Hour'
					isLiveTime={this.props.isLiveTime}
					timeOffsetInSeconds={this.props.timeOffsetInSeconds} />
				<Colon />
				<Minute
					timezoneName={this.props.timezoneName}
					customClassName='Minute'
					isLiveTime={this.props.isLiveTime}
					timeOffsetInSeconds={this.props.timeOffsetInSeconds} />
			</div>
		);
	}
}

export default TimezoneTime;