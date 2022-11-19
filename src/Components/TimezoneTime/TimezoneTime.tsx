import React from 'react';
import Hour from '../Hour/Hour';
import Colon from '../Colon/Colon';
import Minutes from '../Minutes/Minutes';
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
			dateString: new Date().toLocaleString("en-US", {timeZone: this.props.timezoneName})
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
      dateString: new Date().toLocaleString("en-US", {timeZone: this.props.timezoneName})
    });
  }

	render() {
		return (
			<div className="TimezoneTime">
				<Hour />
				<Colon />
				<Minutes />
				<TimezoneDate />
				{this.state.dateString}
			</div>
		);
	}
}

export default TimezoneTime;