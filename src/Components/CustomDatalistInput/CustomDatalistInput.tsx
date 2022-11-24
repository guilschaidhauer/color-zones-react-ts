import React from 'react';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import {TimezoneList} from '../../Constants/TimezoneList'

type Timezone = {
  id: string;
  value: string;
}

type Props = {
  onSelect: (timezoneName: string) => void;
}

class CustomDatalistInput extends React.Component<Props> {
  constructor(props: Props) {
		super(props);
	}

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
        onSelect={(item) => this.props.onSelect(item.value)}
        items={timezones}
      />
    );
  }
}

export default CustomDatalistInput;