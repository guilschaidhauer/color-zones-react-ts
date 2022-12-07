import React from 'react';
import './RemoveTimezoneButton.css'

type Props = {
  timezoneName: string;
  onClickCallback: any;
  visible: boolean;
  white: boolean
}

class RemoveTimezoneButton extends React.Component<Props> {
  constructor(props: Props) {
		super(props);
	}

  handleClick(): void {
    this.props.onClickCallback(this.props.timezoneName);
  }

  render() {
    return (
      <button className="RemoveTimezoneButton"
      style={{
        visibility: ((this.props.visible) ? 'visible' : 'hidden'),
        opacity: ((this.props.visible) ? '1' : '0')
      }} 
      onClick={this.handleClick.bind(this)}>X</button>
    );
  }
}

export default RemoveTimezoneButton;