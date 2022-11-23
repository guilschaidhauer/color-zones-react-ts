import React from 'react';
import NewTimezoneButton from '../NewTimezoneButton/NewTimezoneButton';
import SelectBox from '../SelectBox/SelectBox';

class NewTimezoneForm extends React.Component {
  render() {
    return (
      <div>
        <NewTimezoneButton />
        <SelectBox />
      </div>
    );
  }
}

export default NewTimezoneForm;