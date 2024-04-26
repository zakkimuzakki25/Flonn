/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { Fragment } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import DropDown from "../bar/Dropdown";
import { DataBulan } from "../../data/DataBulan";
import { Base } from "../../api/API";
import iconGempaBumi from "../../assets/icon/map/disasterType/GempaBumi.svg";
import iconTanahLongsor from "../../assets/icon/map/disasterType/TanahLongsor.svg";
import iconTornado from "../../assets/icon/map/disasterType/Tornado.svg";
import iconBadai from "../../assets/icon/map/disasterType/Badai.svg";
import iconBanjir from "../../assets/icon/map/disasterType/Banjir.svg";
import iconTsunami from "../../assets/icon/map/disasterType/Tsunami.svg";
import iconKebakaranHutan from "../../assets/icon/map/disasterType/KebakaranHutan.svg";
import iconGunungMeletus from "../../assets/icon/map/disasterType/GunungMeletus.svg";
import TooltipDisaster from "../tooltips/TooltipDisaster";

// eslint-disable-next-line react/prop-types
const Map = ({ apikey, data, filterHandle }) => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apikey,
  });

  const [map, setMap] = useState(null);
  const [activeMarker, setActiveMarker] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: -1.5489, lng: 118.0149 });
  const [userLocation, setUserLocation] = useState(null);

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  function getDataYears() {
    Base.get("disaster/years")
      .then((r) => {
        setYears(r.data.data);
      })
      .catch((error) => {
        console.error("Error fetching years:", error);
      });
  }

  useEffect(() => {
    getDataYears();
  }, []);

  useEffect(() => {
    filterHandle(selectedYear, selectedMonth);
  }, [selectedYear, selectedMonth]);

  const getMarkerIconByDisasterType = (type) => {
    switch (type) {
      case "Gempa Bumi":
        return iconGempaBumi;
      case "Tanah Longsor":
        return iconTanahLongsor;
      case "Tornado":
        return iconTornado;
      case "Badai":
        return iconBadai;
      case "Banjir":
        return iconBanjir;
      case "Tsunami":
        return iconTsunami;
      case "Kebakaran Hutan":
        return iconKebakaranHutan;
      case "Gunung Meletus":
        return iconGunungMeletus;
      default:
        return null;
    }
  };

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          setUserLocation({ lat: userLat, lng: userLng });
        //   setMapCenter({ lat: userLat, lng: userLng });

          checkNearbyDisasters({ lat: userLat, lng: userLng });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const checkNearbyDisasters = (userLocation) => {
    if (!data || data.length === 0) return;

    const currentDate = new Date().toLocaleDateString('id-ID', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    data.forEach((item) => {
      const disasterDate = new Date(item.date).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });

      if (disasterDate === currentDate) {
        const distance = calculateDistance(
          userLocation.lat,
          userLocation.lng,
          item.latitude,
          item.longitude
        );

        if (distance < 20) {
          alert('Sedang terjadi bencana di sekitarmu!');
        }
      }
    });
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius bumi dalam km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const deg2rad = (deg) => deg * (Math.PI / 180);

  return (
    <Fragment>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          center={mapCenter}
          zoom={4.5}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* marker */}
          {userLocation && (
            <MarkerF
              position={userLocation}
            />
          )}
          {            
            // eslint-disable-next-line react/prop-types
            data.map((list,) => (
              <MarkerF
                key={list.id}
                position={{
                  lat: list.latitude,
                  lng: list.longitude,
                }}
                icon={{
                  url: getMarkerIconByDisasterType(list.disaster_type),
                  scaledSize: { width: 45, height: 58 },
                }}
                onClick={() => handleActiveMarker(list.id)}
              >
                {activeMarker === list.id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <TooltipDisaster 
                        location={"Indian Ocean"}
                        coordinate={"8°22'22.7\"S. 113°08'33.7\"E"}
                        strength={4.5}
                        date={"2024-04-15"}
                        time={"00:30:49 UTC"}
                        info={"140 km from South East Indonesia<>Magnitude Type : ML<>Depth : 10 K"}
                    />
                    </InfoWindowF>
                  ) : null}
              </MarkerF>
            ))
          }
          {/* filter */}
          <div className="absolute top-4 right-16 flex flex-row gap-3">
            <div className="w-44 h-14">
              <DropDown
                holder={"Bulan"}
                options={DataBulan}
                handleChange={(e) =>
                  setSelectedMonth(e.target.value.split("#")[0])
                }
              />
            </div>

            {/* Dropdown for years */}
            <div className="w-32 h-14">
              <DropDown
                holder={"Tahun"}
                options={years}
                handleChange={(e) =>
                  setSelectedYear(e.target.value.split("#")[0])
                }
              />
            </div>
          </div>
        </GoogleMap>
      ) : null}
    </Fragment>
  );
};

export default Map;
