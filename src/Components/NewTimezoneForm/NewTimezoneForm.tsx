import React from 'react';
import NewTimezoneButton from '../NewTimezoneButton/NewTimezoneButton';
import SelectBox from '../SelectBox/SelectBox';

type Props = {
  onClickAddCallback: (timezoneName: string) => void;
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

  render() {
    return (
      <div>
        <NewTimezoneButton onClickCallback={this.setSelectBoxVisible.bind(this)} />
        {this.state.showSelectBox &&
          (<SelectBox
            onClickAddCallback={this.props.onClickAddCallback}
            onClickCancelCallback={this.setSelectBoxVisibleToFalse.bind(this)}
            setSelectBoxVisibleToFalseCallback={this.setSelectBoxVisibleToFalse.bind(this)} />)
        }
      </div>
    );
  }
}

export default NewTimezoneForm;