import React from 'react';
import './CustomButtom.css'

type Props = {
  className: string;
  label: string;
  onClickCallback: any;
}

class CustomButton extends React.Component<Props> {
  constructor(props: Props) {
		super(props);
	}

  handleClick(): void {
    this.props.onClickCallback();
  }

  render() {
    return (
      <button className={this.props.className} onClick={this.handleClick.bind(this)}>{this.props.label}</button>
    );
  }
}

export default CustomButton;