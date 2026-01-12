import { useWeather } from "./hooks/useWeather";
import { SearchBar } from "./components/SearchBar";
import { CurrentWeather } from "./components/CurrentWeather";
import { Forecast } from "./components/Forecast";
import "./App.css";

const App = () => {
  const { weather, loading, error, fetchWeather } = useWeather();

  return (
    <div className="app-container">
      <header>
        <h1>Timeline Weather</h1>
      </header>

      <main>
        <SearchBar onSearch={fetchWeather} />

        {loading && <p className="loading">Checking the forecast...</p>}

        {error && <div className="error-message">{error}</div>}

        {weather && !loading && (
          <div className="content-wrapper">
            <CurrentWeather data={weather} />
            <Forecast days={weather.days} />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
