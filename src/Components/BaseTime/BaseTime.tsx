import React from 'react';

type Props = {
	timezoneName: string;
	customClassName: string;
}

type State = {
	baseString: string;
}

abstract class BaseTime extends React.Component<Props, State> {
  private timerID: any;
  
  constructor(props: Props) {
		super(props);
    this.state = {
			baseString: this.getBaseString()
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
			baseString: this.getBaseString()
		});
	}

  abstract getBaseString(): string;

  render() {
    return (
      <div className={this.props.customClassName}>
        {this.state.baseString}
      </div>
    );
  }
}

export default BaseTime;