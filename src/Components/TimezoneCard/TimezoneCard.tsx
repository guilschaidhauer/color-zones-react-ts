import React from 'react';
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
        <TimezoneName timezoneName={this.props.timezoneName} />
        <TimezoneTime timezoneName={this.props.timezoneName} />
      </div>
    );
  }
}

export default TimezoneCard;