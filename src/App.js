import './App.css';
import CurrentWeather from './components/CurrentWeather';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar />
      <CurrentWeather />
    </div>
  );
}

export default App;
