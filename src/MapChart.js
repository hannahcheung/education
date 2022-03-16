import React, { useState } from "react";
import Header from "./Header";
import "./Header.css";
import "./MapChart.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";


const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const markers = [
  {
      name: "Code Squad",
      coordinates: [-71.096790, 42.380070],
      url: "https://www.codesquad.org",
      description: ""
  },
  { 
      name: "Code Explorers", 
      coordinates: [-80.329740, 25.908140],
      url: "https://www.codeexplorers.org",
      description: ""
  },
  { 
      name: "Computer Science Alliance", 
      coordinates: [-105.939630, 35.680510],
      url: "https://www.computersciencealliance.org",
      description: ""
  },
  { 
    name: "Athletes for Computer Science", 
    coordinates: [-95.537340, 30.143830],
    url: "https://www.athletesforcomputerscience.org",
    description: ""
  },
  { 
    name: "Acton Institute of Computer Science", 
    coordinates: [-95.537340, 30.143830],
    url: "https://www.actoninstituteofcs.org",
    description: ""
  },
  { 
    name: "Comp Sci High", 
    coordinates: [-73.878660, 40.831840],
    url: "https://www.compscihigh.org",
    description: ""
  },
  { 
    name: "Santa Barbara High School Computer Science Academy Foundation", 
    coordinates: [-119.697550, 34.429450],
    url: "https://www.sbhscs.org",
    description: ""
  },
  { 
    name: "Code Equal", 
    coordinates: [-74.660744, 40.351978],
    url: "https://www.codeequal.com",
    description: ""
  },
  { 
    name: "Hood Code", 
    coordinates: [-73.989308, 40.741895],
    url: "https://www.hoodcodenyc.com",
    description: ""
  },
  { 
    name: "Albus Code", 
    coordinates: [-81.7942944, 26.1421976],
    url: "https://www.albuscode.com",
    description: ""
  },
  { 
    name: "Code Black", 
    coordinates: [-94.933620, 40.776520],
    url: "https://www.codeblacktech.com",
    description: ""
  },
  { 
    name: "Code Your Dreams", 
    coordinates: [-87.629799, 41.878113],
    url: "https://www.codeyourdreams.org",
    description: ""
  },
  { 
    name: "Code and Circuit", 
    coordinates: [-70.930550, 42.857370],
    url: "https://www.codeandcircuit.org",
    description: ""
  },
  { 
    name: "Code for Fun", 
    coordinates: [-122.009400, 37.383440],
    url: "https://www.codeforfun.com",
    description: ""
  },
  { 
    name: "Girls Dream Code", 
    coordinates: [-93.094276, 44.943722],
    url: "https://www.girlsdreamcode.org",
    description: ""
  },
  { 
    name: "When Doves Code", 
    coordinates: [-77.4284222, 38.8388386],
    url: "https://www.whendovescode.org",
    description: ""
  },
  { 
    name: "Startfield", 
    coordinates: [-77.21709294, 38.9258689],
    url: "https://www.whendovescode.org",
    description: ""
  },
  { 
    name: "ZipCode Wilmington", 
    coordinates: [-75.5492921, 39.746771],
    url: "https://www.zipcodewilmington.com",
    description: ""
  },
  { 
    name: "Code The Dream", 
    coordinates: [-78.899109, 35.995931],
    url: "https://www.codethedream.org",
    description: ""
  },
  { 
    name: "Happy Code Club", 
    coordinates: [-73.545113, 41.0607552],
    url: "https://www.happycodeclub.com",
    description: ""
  },
  { 
    name: "Albany Can Code", 
    coordinates: [-73.7034467, 42.6152217],
    url: "https://www.albanycancode.org",
    description: ""
  },
  { 
    name: "Code in the Schools", 
    coordinates: [-76.6155937, 39.311753],
    url: "https://www.codeintheschools.org",
    description: ""
  },
  { 
    name: "Ada Developers Academy", 
    coordinates: [-122.327955, 47.599629],
    url: "https://www.adadevelopersacademy.org",
    description: ""
  }
];

const MapChart = ({ setTooltipContent }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <Header/>
      <div className="map-div">
        <span className="input-text">Find a nonprofit near you</span>
        <input 
          className="text-input"
          value = {text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="map-chart">
        <ComposableMap projection="geoAlbersUsa" className="state-map">
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) => (
                <>
                  {geographies.map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      stroke="#f5c05d"
                      geography={geo}
                      fill="#e3a634"
                      style={{
                        default: {
                          fill: "#f5c05d",
                          outline: "none"
                        },
                        hover: {
                          fill: "#f5c05d",
                          outline: "none"
                        },
                        pressed: {
                          fill: "#f5c05d",
                          outline: "none"
                        }
                      }}
                    />
                  ))}
                </>
              )}
            </Geographies>
              {markers.map((marker, i) => {
                return (
              <Marker data-tip="" coordinates={marker.coordinates} key={i}
              onMouseOver={() => {
                setTooltipContent(marker.name + ": " + marker.url);
              }}
              >
                <g
                fill="none"
                stroke="#FF5533"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-12, -24)"
                
                >
                <circle cx="12" cy="10" r="4" fill="#f5c05d"/>
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" onMouseOut={() => {
                  setTooltipContent("");
                }}/>
                </g>
              </Marker>
                );
              })}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default MapChart;
