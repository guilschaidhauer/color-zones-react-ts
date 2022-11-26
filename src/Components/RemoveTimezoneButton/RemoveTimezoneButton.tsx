import React from 'react';
import './RemoveTimezoneButton.css'

type Props = {
  timezoneName: string;
  onClickCallback: any;
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
      <button className="RemoveTimezoneButton" onClick={this.handleClick.bind(this)}>X</button>
    );
  }
}

export default RemoveTimezoneButton;