import React from 'react';
import Hour from '../Hour/Hour';
import Colon from '../Colon/Colon';
import Minute from '../Minute/Minute';
import './TimezoneTime.css'


type Props = {
	timezoneName: string;
}

class TimezoneTime extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		return (
			<div className="TimezoneTime">
				<Hour timezoneName={this.props.timezoneName} />
				<Colon />
				<Minute timezoneName={this.props.timezoneName} />
			</div>
		);
	}
}

export default TimezoneTime;