import React from 'react';
import TimezoneTime from '../TimezoneTime/TimezoneTime';

class TimezonesHolder extends React.Component {

  render() {
    const timezoneName : string = 'Asia/Tokyo';

    return (
      <div className="TimezonesHolder">
        <TimezoneTime timezoneName = {timezoneName}/>
      </div>
    );
  }
}

export default TimezonesHolder;