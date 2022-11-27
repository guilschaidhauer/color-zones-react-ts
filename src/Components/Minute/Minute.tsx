import React from 'react';

type Props = {
  minuteString: string
}

class Minute extends React.Component<Props>  {
  render() {
    return (
      <div className='Minute'>
        {this.props.minuteString}
      </div>
    );
  }
}

export default Minute;