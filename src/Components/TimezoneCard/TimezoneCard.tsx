import React from 'react';
import BaseTime from '../BaseTime/BaseTime';
import TimezoneName from '../TimezoneName/TimezoneName';
import TimezoneTime from '../TimezoneTime/TimezoneTime';

interface Props {
  timezoneName: string;
}

class TimezoneCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  getDateString(timezoneName: string): string {
    return new Date().toLocaleDateString("pt-BR", { timeZone: timezoneName });
  }

  render() {
    return (
      <div className="TimezoneCard">
        <TimezoneTime timezoneName={this.props.timezoneName} />
        <BaseTime timezoneName={this.props.timezoneName} getTimeString={this.getDateString} />
        <TimezoneName timezoneName={this.props.timezoneName} />
      </div>
    );
  }
}

export default TimezoneCard;