import React from 'react';
import './TimezoneDate.css';

type Props = {
	dateString: string
}

class TimezoneDate extends React.Component<Props> {
  render() {
    return (
      <div className='Hour'>
        {this.props.dateString}
      </div>
    );
  }
}

export default TimezoneDate;