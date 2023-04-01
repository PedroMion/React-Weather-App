import './SearchArea.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <input placeholder={props.placeholder} className="input"></input>
        </div>
     );
}

export const Button = (props) => {
    return (
        <div>
            <button className="button" style={{width:props.width, heigth:props.heigth}}>
                {props.text}
                {props.img}
            </button>
        </div>
    );
}

const SearchArea = (props) => {
    return (
        <div className="searchArea" style={{width:props.width}}>
            <InputText text="Weather App" />;
            <div className="searchSquare" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                <Input placeholder="Search here" />
                <Button img={<FontAwesomeIcon icon={faSearch} />}/>
            </div>
        </div>
    );
}

export default SearchArea;