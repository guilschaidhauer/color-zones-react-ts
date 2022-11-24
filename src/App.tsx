import React from 'react';
import './App.css';
import TimezonesHolder from './Components/TimezonesHolder/TimezonesHolder';
import NewTimezoneForm from './Components/NewTimezoneForm/NewTimezoneForm';
import {getTimezoneByValue} from './Constants/TimezoneList';

type Props = {
}

type State = {
  activeTimezoneNames: string[];
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeTimezoneNames: []
    };
  }

  addActiveTimezoneName(timezoneName: string): void {
    const timezoneFullName: string = getTimezoneByValue(timezoneName);
    
    let newTimezoneList: string[] = this.state.activeTimezoneNames; 
    newTimezoneList.push(timezoneFullName);

    this.setState({
      activeTimezoneNames: newTimezoneList
    });    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TimezonesHolder activeTimezoneNames={this.state.activeTimezoneNames}/>
          <NewTimezoneForm onClickAddCallback={this.addActiveTimezoneName.bind(this)}/>
        </header>
      </div>
    );
  }
}

export default App;
