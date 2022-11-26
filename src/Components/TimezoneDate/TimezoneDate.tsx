import BaseTime from '../BaseTime/BaseTime';
import {getDate} from '../../Utils/DateUtils';
import './TimezoneDate.css';

class TimezoneDate extends BaseTime {
  getBaseString(): string {
    return getDate(this.props.timezoneName, this.props.isLiveTime, this.props.timeOffsetInSeconds);
  }
}

export default TimezoneDate;