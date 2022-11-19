import React from 'react';
import Hour from '../Hour/Hour';
import Colon from '../Colon/Colon';
import Minute from '../Minute/Minute';
import TimezoneDate from '../TimezoneDate/TimezoneDate';

type Props = {
	timezoneName: string;
}

type State = {
	dateString: string;
}

class TimezoneTime extends React.Component<Props, State> {
	private timerID: any;

	constructor(props: Props) {
		super(props);
		this.state = {
			dateString: new Date().toLocaleString("en-US", { timeZone: this.props.timezoneName })
		};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			dateString: new Date().toLocaleString("en-US", { timeZone: this.props.timezoneName })
		});
	}

	getDateObject() {
		const originalDateString = new Date().toLocaleString("en-US", { timeZone: this.props.timezoneName });
		const parsedOriginalDate = Date.parse(originalDateString);
		const originalDate = new Date(parsedOriginalDate);

		return originalDate;
	}

	render() {
		return (
			<div className="TimezoneTime">
				<Hour timezoneName={this.props.timezoneName} />
				<Colon />
				<Minute timezoneName={this.props.timezoneName}/>
				<TimezoneDate />
				{this.state.dateString}
			</div>
		);
	}
}

export default TimezoneTime;