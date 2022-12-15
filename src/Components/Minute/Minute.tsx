import React from 'react';
import MinuteInput from '../MinuteInput/MinuteInput';

type Props = {
  minuteString: string
  addTimeOffset: (offsetInSeconds: number) => void;
}

type State = {
  isEditable: boolean;
};

class Minute extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      isEditable: false,
    };
  }

  onClick(e: any) {
    this.setState({
      isEditable: true
    });
  }

  onBlur(newMinuteString: string): void {
    this.setState({
      isEditable: false
    });

    if(!this.isValidMinute(newMinuteString)) {
      return;
    }

    this.props.addTimeOffset(this.calculateMinuteDifferenceInSeconds(newMinuteString));
  }

  isValidMinute(minuteString: string): boolean {
    const minute: number = parseInt(minuteString);
    return (minute >= 0 && minute <= 59 && minute !== null);
  }

  calculateMinuteDifferenceInSeconds(newHourString: string): number {
    return (parseInt(newHourString) - parseInt(this.props.minuteString)) * 60;
  }

  render() {
    return (
      <div className='Minute'>
        {!this.state.isEditable ? <div onClick={e => this.onClick(e)}>{this.props.minuteString}</div> :
          <MinuteInput minuteString={this.props.minuteString} onBlur={this.onBlur.bind(this)} />
        }
      </div>
    );
  }
}

export default Minute;