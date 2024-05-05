/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { Fragment } from "react";
import {
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";

// eslint-disable-next-line react/prop-types
const MapView = ({ apikey, centerLat, centerLong, zoomLevel }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apikey,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <Fragment>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          center={{lat: centerLat, lng: centerLong}}
          zoom={zoomLevel}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            zoomControl:false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
        }}
        >
        </GoogleMap>
      ) : null}
    </Fragment>
  );
};

export default MapView;
