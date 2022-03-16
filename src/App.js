import './App.css';
import Header from './Header';
import "./Header.css";
import { Button } from "@mui/material";
import "@fontsource/playfair-display-sc";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="site-title">
        <span>COMPUTER</span>
        <span>SCIENCE FOR</span>
        <span>EVERYONE</span>
        <Button variant="contained" href="/about"
        sx={{
          color: "#4880ad",
          backgroundColor: "white"
        }}>
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default App;
