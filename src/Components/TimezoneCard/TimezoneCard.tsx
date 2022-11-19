import React from 'react';
import TimezoneDate from '../TimezoneDate/TimezoneDate';
import TimezoneName from '../TimezoneName/TimezoneName';
import TimezoneTime from '../TimezoneTime/TimezoneTime';

interface Props {
  timezoneName: string;
}

class TimezoneCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="TimezoneCard">
        <TimezoneTime timezoneName={this.props.timezoneName} />
        <TimezoneDate />
        <TimezoneName timezoneName={this.props.timezoneName} />
      </div>
    );
  }
}

export default TimezoneCard;