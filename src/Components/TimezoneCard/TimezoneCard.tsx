import React from 'react';
import TimezoneTime from '../TimezoneTime/TimezoneTime';
import TimezoneDate from '../TimezoneDate/TimezoneDate';
import TimezoneName from '../TimezoneName/TimezoneName';
import RemoveTimezoneButton from '../RemoveTimezoneButton/RemoveTimezoneButton';
import './TimezoneCard.css'

interface Props {
  timezoneName: string;
  handleDeleteTimezone: (timezoneName: string) => void;
}

class TimezoneCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="TimezoneCard">
        <TimezoneTime timezoneName={this.props.timezoneName} />
        <TimezoneDate timezoneName={this.props.timezoneName} customClassName='TimezoneDate'/>
        <TimezoneName timezoneName={this.props.timezoneName} />
        <RemoveTimezoneButton timezoneName={this.props.timezoneName} onClickCallback={this.props.handleDeleteTimezone}/>
      </div>
    );
  }
}

export default TimezoneCard;