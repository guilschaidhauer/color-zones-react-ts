import './App.css';
import TimezonesHolder from './Components/TimezonesHolder/TimezonesHolder';
import NewTimezoneForm from './Components/NewTimezoneForm/NewTimezoneForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimezonesHolder />
        <NewTimezoneForm />
      </header>
    </div>
  );
}

export default App;
