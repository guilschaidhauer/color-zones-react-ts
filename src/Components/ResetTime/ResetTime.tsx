import React from "react";
import './ResetTime.css'

type Props = {
  onClickCallback: ()=> void;
}

class ResetTime extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="ResetTime">
        <button className="ResetTimeButton" onClick={this.props.onClickCallback}>Reset time</button>
      </div>
    );
  }
}

export default ResetTime;