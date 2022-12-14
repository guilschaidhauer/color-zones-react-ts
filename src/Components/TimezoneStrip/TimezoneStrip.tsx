import React from 'react';
import './TimezoneStrip.css';
import TimezoneCard from '../TimezoneCard/TimezoneCard';
import { timezoneColor } from '../../Constants/TimezoneStripColors';

type Props = {
  timezoneName: string;
  width: number;
  handleDeleteTimezone: (timezoneName: string) => void;
  color: timezoneColor;
  hourString: string;
  minuteString: string;
  dateString: string;
  addTimeOffset: (offsetInSeconds: number) => void;
}

class TimezoneStrip extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="TimezoneStrip"
        style={{
          width: this.props.width + '%',
          background: this.props.color.color
        }}>
        <TimezoneCard
          hourString={this.props.hourString}
          minuteString={this.props.minuteString}
          dateString={this.props.dateString}
          timezoneName={this.props.timezoneName}
          handleDeleteTimezone={this.props.handleDeleteTimezone}
          white={this.props.color.white}
          addTimeOffset={this.props.addTimeOffset} />
      </div>
    );
  }
}

export default TimezoneStrip;