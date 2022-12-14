import React from "react";
import './HourInput.css';

type Props = {
  hourString: string;
  onBlur: (newHourString: string) => void;
};

class HourInput extends React.Component<Props> {
  private input: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      inputHour: this.props.hourString
    }
  }

  componentDidMount(): void {
    this.input.focus();
  }

  render() {
    return (
      <input className="HourInput"
        ref={(input) => {
          this.input = input;
        }}
        placeholder={this.props.hourString}
        onBlur={(e) => this.props.onBlur(this.input.value)}
      />
    );
  }
}

export default HourInput;
