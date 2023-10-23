import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './style.css';
import UserModal from '../UserModal'


export default function Map(props, long, latit) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const Location = { lng: props.long, lat: props.latit};
  const [zoom] = useState(14);
  maptilersdk.config.apiKey = 'NsyZwoSs3jN6eaZMF3kY';


  const [showComponent, setShowComponent] = useState(false);
  const handleMarkerClick = () => {
    setShowComponent(true);
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
      center: [props.long, props.latit],
      zoom: zoom,
      
    });

      
  }, [props.long, props.latit, zoom]);

  function points(latitude, longitude){
    new maptilersdk.Marker({color: "#FF0000"})
      .setLngLat([longitude, latitude])
      .addTo(map.current)
     
  }


  useEffect(() => {

    for (const user of users) {
      console.log(user.name);
      points(user.latitude ,user.longitude)
    }


  }, [props.long, props.latit, zoom]);

  

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />

      <div>
      {/* Renderize seu mapa e seus marcadores aqui */}
      <div className="maplibregl-canvas-container" onClick={console.log("ok")}>
        {/* Conteúdo do marcador */}
      </div>

      {/* Renderize o componente quando o marcador for clicado */}
      {showComponent && <UserModal/>}
      <UserModal/>
    </div>


    </div>
  );
}