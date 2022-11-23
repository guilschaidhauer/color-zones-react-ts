import React from 'react';
import './NewTimezoneButton.css';

class NewTimezoneButton extends React.Component {
  handleClick(): void {
    console.log("Hello");
  }

  render() {
    return (
      <button className="NewTimezoneButton" onClick={this.handleClick}>+</button>
    );
  }
}

export default NewTimezoneButton;