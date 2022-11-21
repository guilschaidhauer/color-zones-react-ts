import BaseTime from '../BaseTime/BaseTime';
import {getHour} from '../../Utils/DateUtils';

class Hour extends BaseTime {
  getBaseString(): string {
    return getHour(this.props.timezoneName);
  }
}

export default Hour;