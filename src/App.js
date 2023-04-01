import SearchArea from './components/SearchArea';
import LocationArea from './components/LocationArea';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="app">
        <SearchArea />
        <LocationArea />
      </div>
    </div>
  );
}

export default App;
