import React from 'react';
import BaseTime from '../BaseTime/BaseTime';

class Hour extends BaseTime {
  getBaseString(): string {
    return new Date().toLocaleString("pt-BR", { timeZone: this.props.timezoneName, hour: '2-digit' });
  }
}

export default Hour;