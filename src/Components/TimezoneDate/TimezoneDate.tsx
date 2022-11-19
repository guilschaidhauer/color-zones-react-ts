import BaseTime from '../BaseTime/BaseTime';

class TimezoneDate extends BaseTime {
  getBaseString(): string {
    return new Date().toLocaleDateString("pt-BR", { timeZone: this.props.timezoneName });
  }
}

export default TimezoneDate;