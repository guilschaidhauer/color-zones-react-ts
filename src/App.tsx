import React from 'react';
import './App.css';
import TimezonesHolder from './Components/TimezonesHolder/TimezonesHolder';
import NewTimezoneForm from './Components/NewTimezoneForm/NewTimezoneForm';
import { getTimezoneByValue } from './Constants/TimezoneList';
import { getSavedTimezones } from './Utils/SettingsUtils';
import { getDateObject } from "./Utils/DateUtils";
import { addTimezoneToSavedTimezones } from './Utils/SettingsUtils';
import { removeTimezoneFromSavedTimezones } from './Utils/SettingsUtils';

type Timezone = {
  name: string,
  date: Date,
}

type Props = {
}

type State = {
  timezones: Timezone[]
}

class App extends React.Component<Props, State> {
  private timerID: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      //activeTimezoneNames: getSavedTimezones(),
      timezones: []
    };
  }


  componentDidMount(): void {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(): void {
    clearInterval(this.timerID);
  }

  tick(): void {
    //Update
    /*this.setState({
      baseString: this.getBaseString()
    });*/
  }

  addActiveTimezoneName(timezoneName: string): void {
    const timezoneFullName: string = getTimezoneByValue(timezoneName);

    let newTimezoneList: Timezone[] = this.state.timezones;

    newTimezoneList.push({
      name: timezoneFullName,
      date: getDateObject(timezoneFullName, true, 0)
    });

    addTimezoneToSavedTimezones(timezoneFullName);

    this.setState({
      timezones: newTimezoneList
    });
  }

  removeActiveTimezoneName(timezoneName: string): void {
    let newTimezoneList: Timezone[] = this.state.timezones;

    for (let i: number = 0; i < newTimezoneList.length; i++) {
      if (newTimezoneList[i].name === timezoneName) {
        newTimezoneList.splice(i, 1);
      }
    }

    removeTimezoneFromSavedTimezones(timezoneName);

    this.setState({
      timezones: newTimezoneList
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TimezonesHolder timezones={this.state.timezones} handleDeleteTimezone={this.removeActiveTimezoneName.bind(this)} />
          <NewTimezoneForm onClickAddCallback={this.addActiveTimezoneName.bind(this)} />
        </header>
      </div>
    );
  }
}

export default App;
