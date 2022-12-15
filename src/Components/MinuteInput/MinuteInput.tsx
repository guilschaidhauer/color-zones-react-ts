import React from "react";
import './MinuteInput.css';

type Props = {
  minuteString: string;
  onBlur: (newMinuteString: string) => void;
};

class MinuteInput extends React.Component<Props> {
  private input: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      inputMinute: this.props.minuteString
    }
  }

  componentDidMount(): void {
    this.input.focus();
  }

  render() {
    return (
      <input className="MinuteInput"
        ref={(input) => {
          this.input = input;
        }}
        placeholder={this.props.minuteString}
        onBlur={(e) => this.props.onBlur(this.input.value)}
      />
    );
  }
}

export default MinuteInput;
