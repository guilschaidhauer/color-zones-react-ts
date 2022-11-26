import React from 'react';
import './TimezoneStrip.css';
import TimezoneCard from '../TimezoneCard/TimezoneCard';
import { TimezoneStripColors } from '../../Constants/TimezoneStripColors';
import { timezoneColor } from '../../Constants/TimezoneStripColors';
import { getHour } from '../../Utils/DateUtils';

type Props = {
  timezoneName: string;
  width: number;
  handleDeleteTimezone: (timezoneName: string) => void;
  isLiveTime: boolean;
  timeOffsetInSeconds: number;
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
    const colorIndex: number = +getHour(this.props.timezoneName, this.props.isLiveTime, this.props.timeOffsetInSeconds);
    return TimezoneStripColors[colorIndex];
  }

  render() {
    return (
      <div className="TimezoneStrip"
        style={{
          width: this.props.width + '%',
          background: this.state.color.color,
          color: ((this.state.color.white) ? 'azure' : '#393f3f')
        }}>
        <TimezoneCard
          timezoneName={this.props.timezoneName}
          handleDeleteTimezone={this.props.handleDeleteTimezone}
          isLiveTime={this.props.isLiveTime}
          timeOffsetInSeconds={this.props.timeOffsetInSeconds} />
      </div>
    );
  }
}

export default TimezoneStrip;