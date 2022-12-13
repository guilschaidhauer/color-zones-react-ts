import React from "react";

type Props = {
  hourString: string;
};

class HourInput extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  onBlur(): void {
    this.setState({
      isEditable: false,
    });
  }

  render() {
    return (
      <div className="HourInput">
        <input
          value={this.props.hourString}
          onChange={(e) => this.setState({ inputHour: e.target.value })}
          onBlur={this.onBlur.bind(this)}
        />
      </div>
    );
  }
}

export default HourInput;
