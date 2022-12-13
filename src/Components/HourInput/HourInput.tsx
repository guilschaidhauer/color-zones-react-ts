import React from "react";

type Props = {
  hourString: string;
  onBlur: () => void;
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
      <div className="HourInput">
        <input
          ref={(input) => {
            this.input = input;
          }}
          value={this.props.hourString}
          onChange={(e) => this.setState({ inputHour: e.target.value })}
          onBlur={this.props.onBlur}
        />
      </div>
    );
  }
}

export default HourInput;
