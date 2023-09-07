import './LocationArea.css';
import {Button} from './SearchArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { openWeatherKey, openCageKey } from './keys';

const Text = (props) => {
    return ( 
        <div>
            <p style={{fontSize: props.fontSize}}>{props.textContent}</p>
        </div>
    );
}

const LocationArea = (props) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);

  const handleGetWeather = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }

  useEffect(() => {
    if (latitude && longitude) {
      const weatherURL = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherKey}`;
      const locationURL = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${openCageKey}`;

      axios.get(weatherURL)
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => {
          console.error('Falha na solicitação', error);
        });

      axios.get(locationURL)
        .then(response => {
          setLocationData(response.data);
        })
        .catch(error => {
          console.error('Falha na solicitação', error);
        });
    }
  }, [latitude, longitude]);

  console.log(weatherData);
  console.log(locationData);

  return (
    <div className="locationArea" style={{width:props.width, heigth:props.heigth, marginTop:props.marginTop}}>
        <Text textContent="OR" fontSize="25px"/>
        <Button text="Give your location" img={<FontAwesomeIcon icon={faMapMarker} />} width="250px" onClick={handleGetWeather} />
    </div>
  );
}

 
export default LocationArea;