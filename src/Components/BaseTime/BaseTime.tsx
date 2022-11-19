import React from 'react';

type Props = {
	timezoneName: string;
  getTimeString: (timezoneName: string) => string;
}

type State = {
	baseString: string;
}

class BaseTime extends React.Component<Props, State> {
  private timerID: any;
  
  constructor(props: Props) {
		super(props);
    this.state = {
			baseString: this.getHourString()
		};
	}

  componentDidMount(): void {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount(): void {
		clearInterval(this.timerID);
	}

	tick(): void {
		this.setState({
			baseString: this.getHourString()
		});
	}

  getHourString(): string {
    return this.props.getTimeString(this.props.timezoneName);
  }

  render() {
    return (
      <div className="BaseTime">
        {this.state.baseString}
      </div>
    );
  }
}

export default BaseTime;