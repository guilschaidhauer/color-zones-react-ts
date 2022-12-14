import React from "react";
import HourInput from "../HourInput/HourInput";
import "./Hour.css";

type Props = {
  hourString: string;
  addTimeOffset: (offsetInSeconds: number) => void;
};

type State = {
  isEditable: boolean;
  inputHour: string;
};

class Hour extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isEditable: false,
      inputHour: this.props.hourString
    };
  }

  onClick(e: any) {
    this.setState({
      isEditable: true
    });
  }

  onBlur(newHourString: string): void {
    this.setState({
      isEditable: false
    });

    if(!this.isValidHour(newHourString)) {
      return;
    }

    this.props.addTimeOffset(this.calculateHourDifferenceInSeconds(newHourString));
  }

  isValidHour(hourString: string): boolean {
    const hour: number = parseInt(hourString);
    return (hour >= 0 && hour <= 23 && hour !== null);
  }

  calculateHourDifferenceInSeconds(newHourString: string): number {
    return (parseInt(newHourString) - parseInt(this.props.hourString)) * 3600;
  }

  render() {
    return (
      <div className="Hour">
        {!this.state.isEditable ? <div onClick={e => this.onClick(e)}>{this.props.hourString}</div> :
          <HourInput hourString={this.props.hourString} onBlur={this.onBlur.bind(this)} />
        }
      </div>
    );
  }
}

export default Hour;
