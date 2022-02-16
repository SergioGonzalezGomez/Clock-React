
import './App.css';
import Countdown from './components/Countdown/Countdown';
import DigitalClock from './components/DigitalClock/DigitalClock';
import Stopwatch from './components/Stopwatch/Stopwatch';

function App() {
  return (
    <div><h1>A Clockwork's Serg</h1>
    <div className="App">
      <DigitalClock />
      <Countdown />
      <Stopwatch />
      

    </div>
    </div>
  );
}

export default App;
