import "./App.css";
import { WeatherProvider } from "./components/WeatherContext";
import Search from "./components/Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import Weathers from "./components/Weather";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Search />
        <Weathers />
      </WeatherProvider>
    </div>

  );
}

export default App;