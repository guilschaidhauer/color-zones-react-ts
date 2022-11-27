import React from 'react';
import TimezoneTime from '../TimezoneTime/TimezoneTime';
import TimezoneDate from '../TimezoneDate/TimezoneDate';
import TimezoneName from '../TimezoneName/TimezoneName';
import RemoveTimezoneButton from '../RemoveTimezoneButton/RemoveTimezoneButton';
import './TimezoneCard.css'

interface Props {
  timezoneName: string;
  handleDeleteTimezone: (timezoneName: string) => void;
  isLiveTime: boolean;
  timeOffsetInSeconds: number;
  hourString: string;
}

class TimezoneCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="TimezoneCard">
        <TimezoneTime
          timezoneName={this.props.timezoneName}
          isLiveTime={this.props.isLiveTime}
          timeOffsetInSeconds={this.props.timeOffsetInSeconds}
          hourString={this.props.hourString} />
        <TimezoneDate
          timezoneName={this.props.timezoneName}
          customClassName='TimezoneDate'
          isLiveTime={this.props.isLiveTime}
          timeOffsetInSeconds={this.props.timeOffsetInSeconds}  />
        <TimezoneName timezoneName={this.props.timezoneName} />
        <RemoveTimezoneButton timezoneName={this.props.timezoneName} onClickCallback={this.props.handleDeleteTimezone} />
      </div>
    );
  }
}

export default TimezoneCard;