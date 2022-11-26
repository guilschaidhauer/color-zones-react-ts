import React from 'react';
import './App.css';
import TimezonesHolder from './Components/TimezonesHolder/TimezonesHolder';
import NewTimezoneForm from './Components/NewTimezoneForm/NewTimezoneForm';
import {getTimezoneByValue} from './Constants/TimezoneList';
import {getSavedTimezones} from './Utils/SettingsUtils';
import {addTimezoneToSavedTimezones} from './Utils/SettingsUtils';
import {removeTimezoneFromSavedTimezones} from './Utils/SettingsUtils';


type Props = {
}

type State = {
  activeTimezoneNames: string[];
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeTimezoneNames: getSavedTimezones()
    };
  }

  addActiveTimezoneName(timezoneName: string): void {
    const timezoneFullName: string = getTimezoneByValue(timezoneName);
    
    let newTimezoneList: string[] = this.state.activeTimezoneNames; 
    newTimezoneList.push(timezoneFullName);
    addTimezoneToSavedTimezones(timezoneFullName);

    this.setState({
      activeTimezoneNames: newTimezoneList
    });    
  }

  removeActiveTimezoneName(timezoneName: string): void {    
    let newTimezoneList: string[] = this.state.activeTimezoneNames; 

    for(let i: number=0; i<newTimezoneList.length; i++){ 
      if (newTimezoneList[i] === timezoneName) { 
        newTimezoneList.splice(i, 1); 
      }
  }

  removeTimezoneFromSavedTimezones(timezoneName);

    this.setState({
      activeTimezoneNames: newTimezoneList
    });    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TimezonesHolder activeTimezoneNames={this.state.activeTimezoneNames} handleDeleteTimezone={this.removeActiveTimezoneName.bind(this)}/>
          <NewTimezoneForm onClickAddCallback={this.addActiveTimezoneName.bind(this)}/>
        </header>
      </div>
    );
  }
}

export default App;
