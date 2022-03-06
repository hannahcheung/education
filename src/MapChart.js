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

// get locations for all local nonprofits in the USA
const markers = [];

const MapChart = () => {
  return (
    <div>
    <Header/>
    <div className="map-chart">
    <ComposableMap projection="geoAlbersUsa" className="state-map">
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
                />
              ))}
            </>
          )}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
    </div>
    </div>
  );
};

export default MapChart;
