import React from 'react';
import BaseTime from '../BaseTime/BaseTime';
import Hour from '../Hour/Hour';
import Colon from '../Colon/Colon';
import Minute from '../Minute/Minute';

type Props = {
	timezoneName: string;
}

class TimezoneTime extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	getHourString(timezoneName: string): string {
    return new Date().toLocaleString("pt-BR", { timeZone: timezoneName, hour: '2-digit' });
  }

	getMinuteString(timezoneName: string): string {
    return new Date().toLocaleString("pt-BR", { timeZone: timezoneName, minute: '2-digit' });
  }

	render() {
		return (
			<div className="TimezoneTime">
				<Hour timezoneName={this.props.timezoneName} />
				<Colon />
			</div>
		);
	}
}

export default TimezoneTime;