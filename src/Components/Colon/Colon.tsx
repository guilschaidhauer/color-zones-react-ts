import React from 'react';
import './Colon.css'

type Props = {
}

type State = {
  isVisible: boolean
}

class Colon extends React.Component<Props, State> {
  private timerID: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      isVisible: true
    }
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
      isVisible: !this.state.isVisible
    });
  }

  render() {
    return (
      <div className={((this.state.isVisible) ? 'Colon' : 'ColonOff')}>:</div>
    );
  }
}

export default Colon;