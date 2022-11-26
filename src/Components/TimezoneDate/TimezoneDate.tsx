import BaseTime from '../BaseTime/BaseTime';
import {getDate} from '../../Utils/DateUtils';
import './TimezoneDate.css';

class TimezoneDate extends BaseTime {
  getBaseString(): string {
    return getDate(this.props.timezoneName);
  }
}

export default TimezoneDate;