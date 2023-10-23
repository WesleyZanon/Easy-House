import React, { useRef, useEffect, useState, useMemo } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './style.css';
import UserModal from '../UserModal'


export default function Map(props, long, latit) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const Location = useMemo(() => {
    return { lng: props.long, lat: props.latit };
  }, [props.long, props.latit]);

  const [zoom] = useState(14);
  maptilersdk.config.apiKey = 'NsyZwoSs3jN6eaZMF3kY';


  const [showComponent, setShowComponent] = useState(false);
  const handleMarkerClick = (user) => {
    setShowComponent(true);
    setUserModalProps(user);
  };

  const handleOfClick = () => {
    setShowComponent(false);
  };


  const [users, setUsers] = useState(
    [
      {id:1, name:"5 bola", latitude:-23.469678 ,longitude:-47.434762},
      {id:2, name:"kana sutra", latitude:-23.4681452 ,longitude:-47.4392448},
      {id:3, name:"cubaca", latitude:-23.44771850 ,longitude:-47.438252},
    ]
  )


  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: Location,
      zoom: zoom,
      
    });


    for (const user of users) {
      const marker = new maptilersdk.Marker({color: "#FF0000"})
        .setLngLat([user.longitude, user.latitude])
        .addTo(map.current);

      marker.on('click', () => handleMarkerClick(user));
    }


  }, [props.long, props.latit, zoom]);

  const [userModalProps, setUserModalProps] = useState();

  return (
<div className="map-wrap" >

  <div className="map-wrap">
    <div ref={mapContainer} className="map" onClick={handleOfClick} />
  </div>



  <div className="maplibregl-interactive" onClick={handleMarkerClick}>
          {/* Conteúdo do marcador */}
          {showComponent && <UserModal props={userModalProps}  />}
  </div>


    </div>
  );
}
