import React from 'react';

type Props = {
  timezoneName: string;
}

type State = {
  dateString: string;
}

class TimezoneDate extends React.Component<Props, State> {
  private timerID: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      dateString: this.getDateString()
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
      dateString: this.getDateString()
    });
  }

  getDateString(): string {
    return new Date().toLocaleDateString("pt-BR", { timeZone: this.props.timezoneName });
  }

  render() {
    return (
      <div className="TimezoneDate">
        {this.state.dateString}
      </div>
    );
  }
}

export default TimezoneDate;