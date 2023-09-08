import './Result.css';
import React from 'react';
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
    return(
        <div className="Result">
            <div className='resultContainer'>
                <div className='resultSection'>
                    <EmojiArea text="Temperature: " apiInfo="25.2" icon={faSun} style={{color: "#e5de15",}} />
                    <TextArea text1="Min: " text2="Max: " apiInfo1="27.2" apiInfo2="21.6" />
                </div>
            </div>
            <div className='resultContainer' id="locationInfo">
                <TextArea text1="City: " text2="Country: " apiInfo1="Rio de Janeiro" apiInfo2="Brasil" />
                <TextArea text1="Time: " apiInfo1="19:49" />
            </div>
        </div>
    );
}

export default Result;