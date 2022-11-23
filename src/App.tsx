import './App.css';
import NewTimezoneButton from './Components/NewTimezoneButton/NewTimezoneButton';
import TimezonesHolder from './Components/TimezonesHolder/TimezonesHolder';
import SelectBox from './Components/SelectBox/SelectBox';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimezonesHolder />
        <NewTimezoneButton />
        <SelectBox />
      </header>
    </div>
  );
}

export default App;
