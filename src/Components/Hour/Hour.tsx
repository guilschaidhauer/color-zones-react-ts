import BaseTime from '../BaseTime/BaseTime';
import {getHour} from '../../Utils/DateUtils';
import './Hour.css'

class Hour extends BaseTime {
  getBaseString(): string {
    return getHour(this.props.timezoneName, this.props.isLiveTime, this.props.timeOffsetInSeconds);
  }
}

export default Hour;