import React from 'react';

type Props = {
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
      <button className="CustomButtom" onClick={this.handleClick.bind(this)}>{this.props.label}</button>
    );
  }
}

export default CustomButton;