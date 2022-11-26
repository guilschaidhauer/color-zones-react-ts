import React from 'react';
import CustomDataListInput from '../CustomDatalistInput/CustomDatalistInput';
import CustomButton from '../CustomButton/CustomButton';
import './SelectBox.css';

type Props = {
  onClickAddCallback: (timezoneName: string) => void;
  onClickCancelCallback: () => void;
  setSelectBoxVisibleToFalseCallback: () => void;
}

type State = {
  selectedValue: string;
}

class SelectBox extends React.Component<Props, State> {
  constructor(props: Props) {
		super(props);
    this.state = {
      selectedValue: ''
    };
	}

  onClickAdd() {
    this.props.onClickAddCallback(this.state.selectedValue);
    this.props.setSelectBoxVisibleToFalseCallback();
  }

  onSelect(timezoneName: string): void {
    this.setState({
      selectedValue: timezoneName
    });
  }

  render() {
    return (
      <div className="SelectBox">
        <CustomDataListInput onSelect={this.onSelect.bind(this)}/>
        <CustomButton label="Add" onClickCallback={this.onClickAdd.bind(this)}/>
        <CustomButton label="Cancel" onClickCallback={this.props.onClickCancelCallback}/>
      </div>
    );
  }
}

export default SelectBox;