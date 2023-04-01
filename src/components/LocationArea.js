import './LocationArea.css';
import {Button} from './SearchArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

const Text = (props) => {
    return ( 
        <div>
            <p style={{fontSize: props.fontSize}}>{props.textContent}</p>
        </div>
    );
}

const LocationArea = (props) => {
    return (
        <div className="locationArea" style={{width:props.width, heigth:props.heigth, marginTop:props.marginTop}}>
            <Text textContent="OR" fontSize="25px"/>
            <Button text="Give your location" img={<FontAwesomeIcon icon={faMapMarker} />} width="250px" />
        </div>
    );
}
 
export default LocationArea;