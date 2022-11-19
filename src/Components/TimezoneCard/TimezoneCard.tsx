import React from 'react';
import TimezoneTime from '../TimezoneTime/TimezoneTime';
import TimezoneDate from '../TimezoneName/TimezoneName';
import TimezoneName from '../TimezoneName/TimezoneName';


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
        <TimezoneDate timezoneName={this.props.timezoneName} />
        <TimezoneName timezoneName={this.props.timezoneName} />
      </div>
    );
  }
}

export default TimezoneCard;