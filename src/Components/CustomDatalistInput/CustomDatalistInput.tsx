import React from 'react';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import {TimezoneList} from '../../Constants/TimezoneList'

type Timezone = {
  id: string;
  value: string;
}

class CustomDatalistInput extends React.Component {
  render() {
    let timezones: Timezone[] = [];

    TimezoneList.forEach((value: string, key: string) => {
      timezones.push({
        id: key,
        value: value
      })
    });

    return (
      <DatalistInput
        placeholder="Chocolate"
        label="Select ice cream flavor"
        onSelect={(item) => console.log(item.value)}
        items={timezones}
      />
    );
  }
}

export default CustomDatalistInput;