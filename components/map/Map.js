import React, { useState } from "react";
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from "react-map-gl";
import { getCenter } from "geolib";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState("");

  /* transform searchResults object into required object */
  /* { latitude: ____ longitude: ____ } object */

  // map to loop through items, returns object each time it loops through
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // latitude and longitude for the center of searched location coordinates
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude, // reference center object to get center latitude
    longitude: center.longitude, // reference center object to get cetner longitude
    zoom: 12,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/chopkinz/ckydfn93c0u9u14l92w8brjey" // grab custom styles from mapbox
      mapboxApiAccessToken={process.env.mapbox_key} // grab key from environment
      {...viewport}
      // updates UI on scroll using viewport
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            <p
              role="img"
              onClick={() => setSelectedLocation(result)} // set location
              className="cursor-pointer text-4xl animate-bounce"
              aria-label="push-pin"
            >
              📍
            </p>
          </Marker>

          {/* popup that shows when a marker is clicked */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation("")}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              offsetLeft={12}
              offsetTop={-10}
            >
              <p className="font-bold px-2">${result.price} / night</p>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
