import './Result.css';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const TextArea = (props) => {
    return(
    <div>
        <div className='resultSection'>
            <p className='textArea'><b>{props.text1}</b>{props.apiInfo1}</p>
            <p className='textArea'><b>{props.text2}</b>{props.apiInfo2}</p>
        </div>
    </div>
    );
}

const EmojiArea = (props) => {
    return(
        <div>
            <div className='resultContainer' id="emojiContainer">
                <p className='textArea'><b>{props.text}</b>{props.apiInfo}</p>
                <FontAwesomeIcon icon={props.icon} size="2xl" style={props.style} className='emoji' />
            </div>
        </div>   
    );
}

const Result = (props) => {
    const [temp, setTemp] = useState("");
    const [tempmin, setTempmin] = useState("");
    const [tempmax, setTempmax] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [dataChanged, setDataChanged] = useState(false);

    const getInformationFromAPI = () => {
        setTemp(parseFloat((props.weatherData.main.temp - 273).toFixed(1)));
        setTempmin(parseFloat((props.weatherData.main.temp_min - 273).toFixed(1)));
        setTempmax(parseFloat((props.weatherData.main.temp_max - 273).toFixed(1)));
        setCity(props.locationData.results[0].components.city);
        setCountry(props.locationData.results[0].components.country);
    }

    const isComponentVisible = () => {
        if(props.weatherData && props.locationData) {
            if(props.locationData.results && !dataChanged) {
                getInformationFromAPI();
                document.getElementById("resultId").style.display = "flex";
                setDataChanged(true)
            } else {
                if(dataChanged && props.locationData.results) {
                    if(props.locationData.results[0].components.city != city) {
                        getInformationFromAPI();
                    }
                }
            }
        }
    }

    isComponentVisible();

    return(
        <div className="Result" id="resultId">
            <div className='resultContainer'>
                <div className='resultSection'>
                    <EmojiArea text="Temperature: " apiInfo={temp} icon={faSun} style={{color: "#e5de15",}} />
                    <TextArea text1="Min: " text2="Max: " apiInfo1={tempmin} apiInfo2={tempmax} />
                </div>
            </div>
            <div className='resultContainer' id="locationInfo">
                <TextArea text1="City: " text2="Country: " apiInfo1={city} apiInfo2={country} />
                <TextArea text1="Time: " apiInfo1="--:--" />
            </div>
        </div>
    );
}

export default Result;