import './App.css';
import NewTimezoneButton from './Components/NewTimezoneButton/NewTimezoneButton';
import TimezonesHolder from './Components/TimezonesHolder/TimezonesHolder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimezonesHolder />
        <NewTimezoneButton />
      </header>
    </div>
  );
}

export default App;
