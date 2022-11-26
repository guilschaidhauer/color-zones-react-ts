import BaseTime from '../BaseTime/BaseTime';
import {getHour} from '../../Utils/DateUtils';
import './Hour.css'

class Hour extends BaseTime {
  getBaseString(): string {
    return getHour(this.props.timezoneName);
  }
}

export default Hour;