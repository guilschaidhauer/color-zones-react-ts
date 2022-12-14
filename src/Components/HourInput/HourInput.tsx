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
        value={this.props.hourString}
        onChange={(e) => this.setState({ inputHour: e.target.value })}
        onBlur={(e) => this.props.onBlur(this.input.value)}
      />
    );
  }
}

export default HourInput;
