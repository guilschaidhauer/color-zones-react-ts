import React from 'react';
import './App.css';
import ColorZone from './Components/ColorZone/ColorZone';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ColorZone />
        </header>
      </div>
    );
  }
}

export default App;
