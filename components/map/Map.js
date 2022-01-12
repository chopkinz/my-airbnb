import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  /* transform searchResults object into required object */
  /* { latitude: 52.516272, longitude: 13.377722 } object */

  // map to loop through items, returns object each time it loops through
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // latitude and longitude for the center of searched location coordinates
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%", // use 100% of container
    height: "100%",
    latitude: center.latitude, // reference center object to get center latitude
    longitude: center.longitude, // reference center object to get cetner longitude
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/chopkinz/ckyaem6u000ia14p0h4itfvgu" // grab custom styles from mapbox
      mapboxApiAccessToken={process.env.mapbox_key} // grab key from environment
      {...viewport}
      // updates UI on scroll using viewport
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20} // offset slighlty to the left
            offsetTop={-10} // offset slightly on the top
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)} // set location to
              className="cursor-pointer text-3xl animate-bounce"
              aria-label="push-pin"
            >
              📍
            </p>
          </Marker>

          {/* popup that shows when a marker is clicked */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              <div className="flex space-x-4 px-2 pt-1 text-center">
                <p className="text-base font-bold">{result.title}</p>
                <p className="relative">{result.price}</p>
              </div>
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
