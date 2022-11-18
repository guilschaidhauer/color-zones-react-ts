import React from 'react';

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
				{this.state.dateString}
			</div>
		);
	}
}

export default TimezoneTime;