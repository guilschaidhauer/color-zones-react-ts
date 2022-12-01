import React from 'react';
import TimezonesHolder from '../TimezonesHolder/TimezonesHolder';
import NewTimezoneForm from '../NewTimezoneForm/NewTimezoneForm';
import ResetTime from '../ResetTime/ResetTime';
import { getTimezoneByValue } from '../../Constants/TimezoneList';
import { getSavedTimezones } from '../../Utils/SettingsUtils';
import { getDateObject } from "../../Utils/DateUtils";
import { addTimezoneToSavedTimezones } from '../../Utils/SettingsUtils';
import { removeTimezoneFromSavedTimezones } from '../../Utils/SettingsUtils';

type Timezone = {
  name: string,
  date: Date,
}

type Props = {
}

type State = {
  timezones: Timezone[],
  isLiveTime: boolean;
  timeOffsetInSeconds: number;
  wheelIsFree: boolean;
}

class ColorZone extends React.Component<Props, State> {
  private timerID: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      timezones: getSavedTimezones(),
      isLiveTime: true,
      timeOffsetInSeconds: 0,
      wheelIsFree: true,
    };
  }

  addTimeOffset(offsetInSeconds: number) {
    const newOffset: number = this.state.timeOffsetInSeconds + offsetInSeconds;
    let newTimezoneList: Timezone[] = this.state.timezones;

    for (let i: number = 0; i < newTimezoneList.length; i++) {
      newTimezoneList[i].date = getDateObject(newTimezoneList[i].name, false, newOffset);
    }

    //refreshTimeForAllCards();

    this.setState({
      timezones: newTimezoneList,
      isLiveTime: false,
      wheelIsFree: false,
      timeOffsetInSeconds: newOffset
    });

    setTimeout(this.setWheelIsFreeToTrue.bind(this), 250);
  }

  setWheelIsFreeToTrue(): void {
    this.setState({
      wheelIsFree: true
    });
  }

  setIsLiveTimeToTrue(): void {
    this.setState({
      isLiveTime: true,
      timezones: getSavedTimezones(),
      timeOffsetInSeconds: 0
    });
  }

  onWheel(event: React.WheelEvent): void {
    if (this.state.wheelIsFree && event.deltaY < -49) {
      this.addTimeOffset(3600);
    } else if (this.state.wheelIsFree && event.deltaY > 49) {
      this.addTimeOffset(-3600);
    }
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
    let newTimezoneList: Timezone[] = this.state.timezones;

    for (let i: number = 0; i < newTimezoneList.length; i++) {
      newTimezoneList[i].date = getDateObject(newTimezoneList[i].name, this.state.isLiveTime, this.state.timeOffsetInSeconds);
    }

    this.setState({
      timezones: newTimezoneList
    });
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
      <div className="ColorZone" onWheel={(event) => this.onWheel(event)}>
        <TimezonesHolder
          timezones={this.state.timezones}
          handleDeleteTimezone={this.removeActiveTimezoneName.bind(this)} />
        <NewTimezoneForm onClickAddCallback={this.addActiveTimezoneName.bind(this)} />
        {!this.state.isLiveTime && (<ResetTime onClickCallback={this.setIsLiveTimeToTrue.bind(this)}/>)}
      </div>
    );
  }
}

export default ColorZone;