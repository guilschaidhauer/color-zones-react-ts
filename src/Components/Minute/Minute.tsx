import BaseTime from '../BaseTime/BaseTime';
import {getMinute} from '../../Utils/DateUtils';

class Minute extends BaseTime {
  getBaseString(): string {
    return getMinute(this.props.timezoneName);
  }
}

export default Minute;