import BaseTime from '../BaseTime/BaseTime';
import {getMinute} from '../../Utils/DateUtils';

class Minute extends BaseTime {
  getBaseString(): string {
    return getMinute(this.props.timezoneName, this.props.isLiveTime, this.props.timeOffsetInSeconds);
  }
}

export default Minute;