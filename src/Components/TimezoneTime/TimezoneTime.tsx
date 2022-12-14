import React from 'react';
import Hour from '../Hour/Hour';
import Colon from '../Colon/Colon';
import Minute from '../Minute/Minute';
import './TimezoneTime.css'

type Props = {
	hourString: string;
	minuteString: string;
	addTimeOffset: (offsetInSeconds: number) => void;
}

class TimezoneTime extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		return (
			<div className="TimezoneTime">
				<Hour hourString={this.props.hourString} addTimeOffset={this.props.addTimeOffset}/>
				<Colon />
				<Minute minuteString={this.props.minuteString}/>
			</div>
		);
	}
}

export default TimezoneTime;