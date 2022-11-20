import React from 'react';
import './TimezoneStrip.css';
import TimezoneCard from '../TimezoneCard/TimezoneCard';

interface Props {
  timezoneName: string;
  width: number;
}

class TimezoneStrip extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="TimezoneStrip" style={{ width: this.props.width + '%' }}>
        <TimezoneCard timezoneName={this.props.timezoneName}/>
      </div>
    );
  }
}

export default TimezoneStrip;