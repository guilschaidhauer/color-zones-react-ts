import React from 'react';
import './NewTimezoneButton.css';

type Props = {
  onClickCallback: (active: boolean) => void;
}

class NewTimezoneButton extends React.Component<Props> {
  constructor(props: Props) {
		super(props);
	}

  handleClick(): void {
    this.props.onClickCallback(true);
  }

  render() {
    return (
      <button className="NewTimezoneButton" onClick={this.handleClick.bind(this)}>+</button>
    );
  }
}

export default NewTimezoneButton;