import React from 'react';
import './App.css';
import TimezonesHolder from './Components/TimezonesHolder/TimezonesHolder';
import NewTimezoneForm from './Components/NewTimezoneForm/NewTimezoneForm';

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TimezonesHolder activeTimezoneNames={this.state.activeTimezoneNames}/>
          <NewTimezoneForm />
        </header>
      </div>
    );
  }
}

export default App;
