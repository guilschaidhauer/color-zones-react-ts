import React from 'react';
import './TimezoneName.css'

interface Props {
  timezoneName: string;
}

class TimezoneName extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="TimezoneName">
        {this.props.timezoneName}
      </div>
    );
  }
}

export default TimezoneName;