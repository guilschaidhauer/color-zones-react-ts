import React from 'react';
import TimezoneTime from '../TimezoneTime/TimezoneTime';
import TimezoneDate from '../TimezoneDate/TimezoneDate';
import TimezoneName from '../TimezoneName/TimezoneName';
import RemoveTimezoneButton from '../RemoveTimezoneButton/RemoveTimezoneButton';
import './TimezoneCard.css'

interface Props {
  timezoneName: string;
  handleDeleteTimezone: (timezoneName: string) => void;
  hourString: string;
  minuteString: string;
  dateString: string;
}

class TimezoneCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="TimezoneCard">
        <TimezoneTime
          hourString={this.props.hourString}
          minuteString={this.props.minuteString} />
        <TimezoneDate dateString={this.props.dateString}/>
        <TimezoneName timezoneName={this.props.timezoneName} />
        <RemoveTimezoneButton timezoneName={this.props.timezoneName} onClickCallback={this.props.handleDeleteTimezone} />
      </div>
    );
  }
}

export default TimezoneCard;