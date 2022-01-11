import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: "100%", // use 100% of container
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/chopkinz/ckyaem6u000ia14p0h4itfvgu" // grab custom styles from mapbox
      mapboxApiAccessToken={process.env.mapbox_key} // grab key from environment
      {...viewport}
      // updates UI on scroll using
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  );
}

export default Map;
