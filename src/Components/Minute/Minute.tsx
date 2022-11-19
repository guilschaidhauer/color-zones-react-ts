import BaseTime from '../BaseTime/BaseTime';

class Minute extends BaseTime {
  getBaseString(): string {
    return new Date().toLocaleString("pt-BR", { timeZone: this.props.timezoneName, minute: '2-digit' });
  }
}

export default Minute;