import React from 'react';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';

class CustomDatalistInput extends React.Component {
  render() {
    return (
      <DatalistInput
        placeholder="Chocolate"
        label="Select ice cream flavor"
        onSelect={(item) => console.log(item.value)}
        items={[
          { id: 'Chocolate', value: 'Chocolate' },
          { id: 'Coconut', value: 'Coconut' },
          { id: 'Mint', value: 'Mint' },
          { id: 'Strawberry', value: 'Strawberry' },
          { id: 'Vanilla', value: 'Vanilla' },
        ]}
      />
    );
  }
}

export default CustomDatalistInput;