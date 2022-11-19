import React from 'react';

type Props = {
	timezoneName: string;
}

type State = {
	minutesString: string;
}

class Minutes extends React.Component<Props, State> {
  private timerID: any;

  constructor(props: Props) {
		super(props);
    this.state = {
			minutesString: this.getMinutesString()
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
			minutesString: this.getMinutesString()
		});
	}

  getMinutesString(): string {
    return new Date().toLocaleString("pt-BR", { timeZone: this.props.timezoneName, minute: '2-digit' });
  }

  render() {
    return (
      <div className="Minutes">
        {this.state.minutesString}
      </div>
    );
  }
}

export default Minutes;