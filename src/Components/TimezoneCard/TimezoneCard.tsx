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
  white: boolean
}

class TimezoneCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  onMouseOver(): void {
    console.log("Entered");
  }

  onMouseLeave(): void {
    console.log("Left");
  }

  render() {
    return (
      <div className="TimezoneCard"
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
        style={{
          color: ((this.props.white) ? 'azure' : '#393f3f')
        }}>
        <TimezoneTime
          hourString={this.props.hourString}
          minuteString={this.props.minuteString} />
        <TimezoneDate dateString={this.props.dateString}/>
        <TimezoneName timezoneName={this.props.timezoneName} />
        <RemoveTimezoneButton 
          timezoneName={this.props.timezoneName} 
          onClickCallback={this.props.handleDeleteTimezone}
          white={this.props.white} />
      </div>
    );
  }
}

export default TimezoneCard;