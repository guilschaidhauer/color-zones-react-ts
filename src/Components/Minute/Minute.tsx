import React from 'react';

type Props = {
	timezoneName: string;
}

type State = {
	minuteString: string;
}

class Minute extends React.Component<Props, State> {
  private timerID: any;

  constructor(props: Props) {
		super(props);
    this.state = {
			minuteString: this.getMinuteString()
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
			minuteString: this.getMinuteString()
		});
	}

  getMinuteString(): string {
    return new Date().toLocaleString("pt-BR", { timeZone: this.props.timezoneName, minute: '2-digit' });
  }

  render() {
    return (
      <div className="Minutes">
        {this.state.minuteString}
      </div>
    );
  }
}

export default Minute;