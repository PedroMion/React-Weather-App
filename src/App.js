import SearchArea from './components/SearchArea';
import LocationArea from './components/LocationArea';
import Result from './components/Result';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);

  const updateWeatherData = (data) => {
    setWeatherData(data);
  }

  const updateLocationData = (data) => {
    setLocationData(data)
  }

  return (
    <div className="container">
      <div className="app">
        <SearchArea updateWeatherData={updateWeatherData} updateLocationData={updateLocationData} />
        <LocationArea updateWeatherData={updateWeatherData} updateLocationData={updateLocationData} />
        <Result weatherData={weatherData} locationData={locationData} />
      </div>
    </div>
  );
}

export default App;
