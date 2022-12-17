import React from 'react';
import './Abbreviation.css'

type Props = {
  abbreviation: string;
}

class Abbreviation extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="Abbreviation">
        {this.props.abbreviation}
      </div>
    );
  }
}

export default Abbreviation;