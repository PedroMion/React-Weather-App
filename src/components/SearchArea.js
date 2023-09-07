import './SearchArea.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { openWeatherKey, openCageKey } from './keys';

const InputText = (props) => {
    return (
        <div>
            <p className="inputText">{props.text}</p>
        </div>
    );
}

const Input = (props) => {
    return ( 
        <div>
            <input placeholder={props.placeholder} className="input" value={props.value} onChange={props.onChange}></input>
        </div>
     );
}

export const Button = (props) => {
    return (
        <div>
            <button className="button" style={{width:props.width, heigth:props.heigth}} onClick={props.onClick} >
                {props.text}
                {props.img}
            </button>
        </div>
    );
}

const SearchArea = (props) => {
    const [inputText, setInputText] = useState('');
    const [location, setLocation] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [locationData, setLocationData] = useState(null);

    const handleInputChange = (event) => {
        if(event && event.target) {
            setInputText(event.target.value);
        }
    }

    const readInput = () => {
        setLocation(inputText);
    }

    useEffect(() => {
        if(location) {
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${openCageKey}`

            axios.get(url)
            .then(response => {
                setLocationData(response.data);
              })
              .catch(error => {
                console.error('Falha na solicitação', error);
              });
        }
    }, [location]);

    useEffect(() => {
        if(locationData && locationData.results) {
            const latitude = locationData.results[0].geometry.lat;
            const longitude = locationData.results[0].geometry.lng;
            const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherKey}`;

            axios.get(url)
                .then(response => {
                    setWeatherData(response.data);
                })
                .catch(error => {
                    console.error('Falha na solicitação', error);
                });
        }
    }, [locationData]);
    
    console.log(weatherData);

    return (
        <div className="searchArea" style={{width:props.width}}>
            <InputText text="Weather App" />;
            <div className="searchSquare" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                <Input placeholder="Search here" value={inputText} onChange={handleInputChange} />
                <Button img={<FontAwesomeIcon icon={faSearch} />} onClick={readInput}/>
            </div>
        </div>
    );
}

export default SearchArea;