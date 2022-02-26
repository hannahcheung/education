import './App.css';
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
    </div>
  );
}

export default App;
