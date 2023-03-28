import {Button} from './SearchArea';

const Text = (props) => {
    return ( 
        <div>
            <p style={{fontSize: props.fontSize}}>{props.textContent}</p>
        </div>
    );
}

const LocationArea = () => {
    return (
        <div>
            <Text textContent="OU" fontSize="12"/>
            <Button text="Ative sua localização"/>
        </div>
    );
}
 
export default LocationArea;