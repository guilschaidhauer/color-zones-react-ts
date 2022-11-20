import React from 'react';
import './TimezoneStrip.css';
import TimezoneCard from '../TimezoneCard/TimezoneCard';
import { TimezoneStripColors } from '../../Constants/TimezoneStripColors';
import { timezoneColor } from '../../Constants/TimezoneStripColors';

type Props = {
  timezoneName: string;
  width: number;
}

type State = {
  color: timezoneColor;
}

class TimezoneStrip extends React.Component<Props, State> {
  private timerID: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      color: this.getTimezoneColor()
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
      color: this.getTimezoneColor()
    });
  }

  getTimezoneColor(): timezoneColor {
    return TimezoneStripColors[10];
  }

  render() {
    return (
      <div className="TimezoneStrip"
        style={{
          width: this.props.width + '%',
          background: this.state.color.color,
          color: ((this.state.color.white) ? 'azure' : '#393f3f')
        }}>
        <TimezoneCard timezoneName={this.props.timezoneName} />
      </div>
    );
  }
}

export default TimezoneStrip;