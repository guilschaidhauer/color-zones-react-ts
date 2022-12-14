import React from 'react';
import TimezoneTime from '../TimezoneTime/TimezoneTime';
import TimezoneDate from '../TimezoneDate/TimezoneDate';
import TimezoneName from '../TimezoneName/TimezoneName';
import RemoveTimezoneButton from '../RemoveTimezoneButton/RemoveTimezoneButton';
import './TimezoneCard.css'

type Props = {
  timezoneName: string;
  handleDeleteTimezone: (timezoneName: string) => void;
  hourString: string;
  minuteString: string;
  dateString: string;
  white: boolean;
  addTimeOffset: (offsetInSeconds: number) => void;
}

type State = {
  isSelected: boolean
}

class TimezoneCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isSelected: false
    }
  }

  onMouseOver(): void {
    if (!this.state.isSelected) {
      this.setState({
        isSelected: true
      })
    }
  }

  onMouseLeave(): void {
    if (this.state.isSelected) {
      this.setState({
        isSelected: false
      })
    }
  }

  render() {
    return (
      <div className={((this.state.isSelected) ? 'TimezoneCardSelected' : 'TimezoneCard')}
        style={{
          color: ((this.props.white && !this.state.isSelected) ? 'azure' : '#393f3f'),
        }}
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)} >
        <TimezoneTime
          hourString={this.props.hourString}
          minuteString={this.props.minuteString}
          addTimeOffset={this.props.addTimeOffset} />
        <TimezoneDate dateString={this.props.dateString}/>
        <TimezoneName timezoneName={this.props.timezoneName} />
        <RemoveTimezoneButton 
          timezoneName={this.props.timezoneName} 
          onClickCallback={this.props.handleDeleteTimezone}
          visible={this.state.isSelected}
          white={this.props.white} />
      </div>
    );
  }
}

export default TimezoneCard;