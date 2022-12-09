import React from "react";
import "./Hour.css";

type Props = {
  hourString: string;
};

type State = {
  isEditable: boolean;
  inputHour: string;
};

class Hour extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isEditable: false,
      inputHour: this.props.hourString
    };
  }

  onClick(e: any) {
    e.target.set
    this.setState({
      isEditable: true
    });
  }

  onBlur(): void {
    this.setState({ 
      isEditable: false 
    });
  }

  render() {
    return (
      <div className="Hour">
        {!this.state.isEditable ? <div onClick={e => this.onClick(e)}>{this.props.hourString}</div> : 
          <input 
            value={this.state.inputHour}
            onChange={e => this.setState({inputHour: e.target.value})}
            onBlur={this.onBlur.bind(this)}/>
        }
      </div>
    );
  }
}

export default Hour;
