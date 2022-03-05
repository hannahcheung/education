import './App.css';
import MapChart from "./MapChart";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <span className="title">CODE FOR EVERYONE</span>
        <Link to="/about">About</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/resources">Resources</Link>
      </header>
      <div className="map-chart">
      <MapChart/>
      </div>
    </div>
  );
}

export default App;
