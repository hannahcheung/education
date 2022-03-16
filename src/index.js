import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import App from './App';
import About from './About';
import MapChart from './MapChart';
import reportWebVitals from './reportWebVitals';

function Index() {
  // TODO: Wrap return in ChakraProvider and convert components to 
  // Chakra UI components and adjust theme.
  const [content, setContent] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/locations" element={
          <div>
            <MapChart setTooltipContent={setContent}/>
            <ReactTooltip className="map-tooltip" delayHide={1000} effect="solid" type="light">
              {content}
            </ReactTooltip>
          </div>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
