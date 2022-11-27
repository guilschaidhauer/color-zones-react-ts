import React from 'react';
import './TimezoneStrip.css';
import TimezoneCard from '../TimezoneCard/TimezoneCard';
import { timezoneColor } from '../../Constants/TimezoneStripColors';

type Props = {
  timezoneName: string;
  width: number;
  handleDeleteTimezone: (timezoneName: string) => void;
  isLiveTime: boolean;
  timeOffsetInSeconds: number;
  color: timezoneColor;
  hourString: string;
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
          background: this.props.color.color,
          color: ((this.props.color.white) ? 'azure' : '#393f3f')
        }}>
        <TimezoneCard
          hourString={this.props.hourString}
          timezoneName={this.props.timezoneName}
          handleDeleteTimezone={this.props.handleDeleteTimezone}
          isLiveTime={this.props.isLiveTime}
          timeOffsetInSeconds={this.props.timeOffsetInSeconds} />
      </div>
    );
  }
}

export default TimezoneStrip;