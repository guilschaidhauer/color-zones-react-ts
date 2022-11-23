import React from 'react';
import CustomDataListInput from '../CustomDatalistInput/CustomDatalistInput';
import './SelectBox.css';

class SelectBox extends React.Component {
  render() {
    return (
      <div className="SelectBox">
        <CustomDataListInput />
      </div>
    );
  }
}

export default SelectBox;