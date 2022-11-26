import React from 'react';
import {getFormattedTimezoneName} from '../../Utils/DateUtils';
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
        {getFormattedTimezoneName(this.props.timezoneName)}
      </div>
    );
  }
}

export default TimezoneName;