import React from "react";

type Props = {
  hourString: string;
};

class HourInput extends React.Component<Props> {
  private input: any;

  constructor(props: Props) {
    super(props);
  }

  onBlur(): void {
    this.setState({
      isEditable: false,
    });
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
          onBlur={this.onBlur.bind(this)}
        />
      </div>
    );
  }
}

export default HourInput;
