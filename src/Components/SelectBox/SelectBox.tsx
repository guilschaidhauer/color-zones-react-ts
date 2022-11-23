import React from 'react';
import CustomDataListInput from '../CustomDatalistInput/CustomDatalistInput';
import CustomButton from '../CustomButton/CustomButton';
import './SelectBox.css';

type Props = {
  onClickAddCallback: () => void;
  onClickCancelCallback: () => void;
}

class SelectBox extends React.Component<Props> {
  constructor(props: Props) {
		super(props);
	}

  render() {
    return (
      <div className="SelectBox">
        <CustomDataListInput />
        <CustomButton label="Add" onClickCallback={this.props.onClickAddCallback}/>
        <CustomButton label="Cancel" onClickCallback={this.props.onClickCancelCallback}/>
      </div>
    );
  }
}

export default SelectBox;