import React from 'react';
import TimezoneCard from '../TimezoneCard/TimezoneCard';

interface Props {
  timezoneName: string;
}

class TimezoneStrip extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="TimezoneStrip">
        <TimezoneCard timezoneName={this.props.timezoneName}/>
      </div>
    );
  }
}

export default TimezoneStrip;