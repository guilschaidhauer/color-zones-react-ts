import React from 'react';
import './Hour.css'

type Props = {
	hourString: string
}

class Hour extends React.Component<Props> {
  render() {
    return (
      <div className='Hour'>
        {this.props.hourString}
      </div>
    );
  }
}

export default Hour;