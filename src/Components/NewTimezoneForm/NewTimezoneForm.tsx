import React from 'react';
import NewTimezoneButton from '../NewTimezoneButton/NewTimezoneButton';
import SelectBox from '../SelectBox/SelectBox';

type Props = {
}

type State = {
  showSelectBox: boolean;
}

class NewTimezoneForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showSelectBox: false
    };
  }

  setSelectBoxVisible(active: boolean): void {
    this.setState({
      showSelectBox: active
    });
  }

  setSelectBoxVisibleToFalse(): void {
    this.setState({
      showSelectBox: false
    });
  }

  // Pass callback to NewTimezoneButton that will set the showSelectBox to true
  render() {
    return (
      <div>
        <NewTimezoneButton onClickCallback={this.setSelectBoxVisible.bind(this)} />
        {this.state.showSelectBox &&
          (<SelectBox
            onClickAddCallback={this.setSelectBoxVisibleToFalse.bind(this)}
            onClickCancelCallback={this.setSelectBoxVisibleToFalse.bind(this)} />)
        }
      </div>
    );
  }
}

export default NewTimezoneForm;