import React from 'react';
import TimezoneTime from '../TimezoneTime/TimezoneTime';
import TimezoneDate from '../TimezoneDate/TimezoneDate';
import TimezoneName from '../TimezoneName/TimezoneName';
import CustomButton from '../CustomButton/CustomButton';
import {removeTimezoneFromSavedTimezones} from '../../Utils/SettingsUtils';

interface Props {
  timezoneName: string;
  handleDeleteTimezone: (timezoneName: string) => void;
}

class TimezoneCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="TimezoneCard">
        <TimezoneTime timezoneName={this.props.timezoneName} />
        <TimezoneDate timezoneName={this.props.timezoneName} />
        <TimezoneName timezoneName={this.props.timezoneName} />
        <CustomButton label='X' onClickCallback={this.props.handleDeleteTimezone(this.props.timezoneName)}/>
      </div>
    );
  }
}

export default TimezoneCard;