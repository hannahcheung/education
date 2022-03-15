import React from "react";
import { geoCentroid } from "d3-geo";
import Header from "./Header";
import "./Header.css";
import "./MapChart.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

import allStates from "./data/allstates.json";

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
      name: "Code Explorers", 
      coordinates: [-80.329740, 25.908140],
      url: "https://www.codeexplorers.org",
      description: ""
  }
];

const MapChart = ({ setTooltipContent }) => {
  return (
    <div>
      <Header/>
      <div className="map-chart">
        <ComposableMap data-tip="" projection="geoAlbersUsa" className="state-map">
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }) => (
                <>
                  {geographies.map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      stroke="#FFF"
                      geography={geo}
                      fill="#DDD"
                      style={{
                        default: {
                          fill: "#D6D6DA",
                          outline: "none"
                        },
                        hover: {
                          fill: "#D6D6DA",
                          outline: "none"
                        },
                        pressed: {
                          fill: "#D6D6DA",
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
              <Marker coordinates={marker.coordinates} key={i}
              onMouseOver={() => {
                setTooltipContent(marker.url);
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
                <circle cx="12" cy="10" r="3"/>
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
