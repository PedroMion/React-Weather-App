import './SearchArea.css';

const InputText = () => {
    return (
        <div>
            <p className="inputText">Procure por uma cidade:</p>
        </div>
    );
}

const Input = () => {
    return ( 
        <div>
            <input placeholder="Pesquise aqui" className="input"></input>
        </div>
     );
}

export const Button = (props) => {
    return (
        <div>
            <button className="button">{props.text}</button>
        </div>
    );
}

const SearchArea = () => {
    return (
        <div className="searchArea">
            <InputText />;
            <div className="searchSquare" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                <Input />;
                <Button text="Pesquisar"/>;
            </div>
        </div>
    );
}

export default SearchArea;