import React from 'react';

type Props = {
	timezoneName: string;
}

type State = {
	hourString: string;
}

class Hour extends React.Component<Props, State> {
  private timerID: any;
  
  constructor(props: Props) {
		super(props);
    this.state = {
			hourString: this.getHourString()
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
			hourString: this.getHourString()
		});
	}

  getHourString(): string {
    return new Date().toLocaleString("pt-BR", { timeZone: this.props.timezoneName, hour: '2-digit' });
  }

  render() {
    return (
      <div className="Hour">
        {this.state.hourString}
      </div>
    );
  }
}

export default Hour;