// /* eslint-disable react/prop-types */
// import { useEffect, useRef, useState } from "react";
// import H from "@here/maps-api-for-javascript";
// import plusIcon from "../../assets/icon/map/Plus.svg";
// import minusIcon from "../../assets/icon/map/Minus.svg";
// import DropDown from "../bar/Dropdown";
// import { DataBulan } from "../../data/DataBulan";
// import iconGempaBumi from "../../assets/icon/map/disasterType/GempaBumi.svg"
// import iconTanahLongsor from "../../assets/icon/map/disasterType/TanahLongsor.svg"
// import iconTornado from "../../assets/icon/map/disasterType/Tornado.svg"
// import iconBadai from "../../assets/icon/map/disasterType/Badai.svg"
// import iconBanjir from "../../assets/icon/map/disasterType/Banjir.svg"
// import iconTsunami from "../../assets/icon/map/disasterType/Tsunami.svg"
// import iconKebakaranHutan from "../../assets/icon/map/disasterType/KebakaranHutan.svg"
// import iconGunungMeletus from "../../assets/icon/map/disasterType/GunungMeletus.svg"
// import iconUser from "../../assets/icon/map/disasterType/User.svg"
// import { Base } from "../../api/Api";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

// const Map = ({ apikey, data, filterHandle }) => {
//   const mapRef = useRef(null);
//   const map = useRef(null);
//   const platform = useRef(null);
//   const [zoomInterval, setZoomInterval] = useState(null);
//   const [years, setYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState("");
//   const [selectedMonth, setSelectedMonth] = useState("");

//   // google maps

//   const render = (status) => {
//     return <h1>{status}</h1>;
//   };

//   // here maps

//   useEffect(() => {
//     filterHandle(selectedYear, selectedMonth);
//   }, [selectedYear, selectedMonth]);  

//   // function addMarkersToMap() {
//   //   if (map.current) {
//   //     map.current.removeObjects(map.current.getObjects());
//   //   }

//   //   // eslint-disable-next-line react/prop-types
//   //   data && data.length > 0 && data.map((item) => {
//   //     try {
//   //       let icon;
  
//   //       switch (item.disaster_type) {
//   //         case "Gempa Bumi":
//   //           icon = iconGempaBumi;
//   //           break;
//   //         case "Tanah Longsor":
//   //           icon = iconTanahLongsor;
//   //           break;
//   //         case "Tornado":
//   //           icon = iconTornado;
//   //           break;
//   //         case "Badai":
//   //           icon = iconBadai;
//   //           break;
//   //         case "Banjir":
//   //           icon = iconBanjir;
//   //           break;
//   //         case "Tsunami":
//   //           icon = iconTsunami;
//   //           break;
//   //         case "Kebakaran Hutan":
//   //           icon = iconKebakaranHutan;
//   //           break;
//   //         case "Gunung Meletus":
//   //           icon = iconGunungMeletus;
//   //           break;
//   //         default:
//   //           break;
//   //       }
  
//   //       const rmnpIcon = new H.map.Icon(icon, { size: { w: 45, h: 58 } });
  
//   //       const marker = new H.map.Marker(
//   //         { lat: item.latitude, lng: item.longitude },
//   //         { icon: rmnpIcon }
//   //       );
//   //       map.current.addObject(marker);
//   //     } catch (error) {
//   //       console.error("Error adding marker:", error);
  
//   //     }
//   //   });
//   // }
  
//   useEffect(() => {
//     // addMarkersToMap();
//     // getUserLocation()
//   }, [data]);  

//   // useEffect(() => {
//   //   if (!map.current) {
//   //     platform.current = new H.service.Platform({ apikey });
//   //     const rasterTileService = platform.current.getRasterTileService({
//   //       queryParams: {
//   //         style: "explore.day",
//   //         size: 512,
//   //       },
//   //     });
//   //     const rasterTileProvider = new H.service.rasterTile.Provider(rasterTileService);
//   //     const rasterTileLayer = new H.map.layer.TileLayer(rasterTileProvider);
//   //     const newMap = new H.Map(mapRef.current, rasterTileLayer, {
//   //       pixelRatio: window.devicePixelRatio || 1,
//   //       center: {
//   //         lat: -1.5489,
//   //         lng: 118.0149,
//   //       },
//   //       zoom: 4.6,
//   //     });

//   //     new H.mapevents.Behavior(new H.mapevents.MapEvents(newMap));
//   //     map.current = newMap;
//   //   }

//   // }, [apikey]);
  
//   // const startZoom = (action) => {
//   //   if (!zoomInterval) {
//   //     const interval = setInterval(() => {
//   //       action();
//   //     }, 40);
//   //     setZoomInterval(interval);
//   //   }
//   // };

//   // const stopZoom = () => {
//   //   clearInterval(zoomInterval);
//   //   setZoomInterval(null);
//   // };

//   // const zoomIn = () => {
//   //   if (map.current) {
//   //     const currentZoom = map.current.getZoom();
//   //     map.current.setZoom(currentZoom + 0.1);
//   //   }
//   // };

//   // const zoomOut = () => {
//   //   if (map.current) {
//   //     const currentZoom = map.current.getZoom();
//   //     map.current.setZoom(currentZoom - 0.1);
//   //   }
//   // };

//   function getDataYears() {
//     Base.get("disaster/years")
//     .then(r => {
//       setYears(r.data.data)
//   })
//   .catch(error => {
//       console.error("Error fetching years:", error);
//   });
    
//   }

//   useEffect(() => {
//     getDataYears();
//   }, []);

//   // const getUserLocation = () => {
//   //   if (navigator.geolocation) {
//   //     navigator.geolocation.getCurrentPosition(
//   //       (position) => {
//   //         const userLocation = {
//   //           lat: position.coords.latitude,
//   //           lng: position.coords.longitude,
//   //         };
//   //         checkNearbyDisasters(userLocation);
//   //         const rmnpIcon = new H.map.Icon(iconUser, { size: { w: 34, h: 45 } });
//   //         const marker = new H.map.Marker(
//   //           { lat: userLocation.lat, lng: userLocation.lng },
//   //           {icon:rmnpIcon}
//   //         );
//   //         map.current.addObject(marker);
//   //       },
//   //       (error) => {
//   //         console.error("Error getting user location:", error);
//   //       }
//   //     );
//   //   } else {
//   //     console.error("Geolocation is not supported by this browser.");
//   //   }
//   // };

//   // const checkNearbyDisasters = (userLocation) => {
//   //   if (!data || data.length === 0) return;

//   //   const currentDate = new Date().toLocaleDateString("id-ID", {
//   //     year: "numeric",
//   //     month: "2-digit",
//   //     day: "2-digit",
//   //   });

//   //   data.forEach((item) => {
//   //     const disasterDate = new Date(item.date).toLocaleDateString("id-ID", {
//   //       year: "numeric",
//   //       month: "2-digit",
//   //       day: "2-digit",
//   //     });

//   //     if (disasterDate == currentDate) {
//   //       const distance = calculateDistance(
//   //         userLocation.lat,
//   //         userLocation.lng,
//   //         item.latitude,
//   //         item.longitude
//   //       );

//   //       if (distance < 20) {
//   //         alert("Sedang terjadi bencana di sekitarmu!");
//   //       }
//   //     }
//   //   });
//   // };

//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371;
//     const dLat = deg2rad(lat2 - lat1);
//     const dLon = deg2rad(lon2 - lon1);
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c;
//     return distance;
//   };
  
  
//   const deg2rad = (deg) => {
//     return deg * (Math.PI / 180);
//   };

//   return (
//     <div className="w-full h-full relative">

//       <Wrapper apiKey={apikey} render={render}>
//         {/* <YourComponent/> */}
//       </Wrapper>
//       {/* <div ref={mapRef} className="w-full h-full"></div> */}

//       <div className="absolute top-4 left-4 flex flex-col gap-3">
//         <button
//           // onMouseDown={() => startZoom(zoomIn)}
//           // onMouseUp={stopZoom}
//           // onTouchStart={() => startZoom(zoomIn)}
//           // onTouchEnd={stopZoom}
//           // onClick={zoomIn}
//           className="lg:w-10 lg:h-10 ds bg-white rounded-lg flex justify-center items-center"
//         >
//           <img className="lg:w-6 hover:scale-110" src={plusIcon} />
//         </button>
//         <button
//           // onMouseDown={() => startZoom(zoomOut)}
//           // onMouseUp={stopZoom}
//           // onTouchStart={() => startZoom(zoomOut)}
//           // onTouchEnd={stopZoom}
//           // onClick={zoomOut}
//           className="lg:w-10 lg:h-10 ds bg-white rounded-lg flex justify-center items-center"
//         >
//           <img className="lg:w-6 hover:scale-110" src={minusIcon} />
//         </button>
//       </div>

//       <div className="absolute top-4 right-3 flex flex-row gap-3">
//         <div className="w-44 h-14">
//           <DropDown
//             holder={"Bulan"}
//             options={DataBulan}
//             handleChange={(e) => setSelectedMonth(e.target.value.split("#")[0])}
//           />
//         </div>

//         {/* Dropdown for years */}
//         <div className="w-32 h-14">
//           <DropDown
//             holder={"Tahun"}
//             options={years}
//             handleChange={(e) => setSelectedYear(e.target.value.split("#")[0])}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Map;
