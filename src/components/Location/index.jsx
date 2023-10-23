import React, { useState, useEffect } from 'react';
import Map from '../Maps';

function Location(props) {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    // Função para obter a localização do usuário
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ latitude, longitude });
        }, (error) => {
          console.error('Erro ao obter a localização:', error);
        });
      } else {
        console.error('Seu navegador não suporta geolocalização.');
      }
    }

    // Chamamos a função para obter a localização quando o componente for montado
    getLocation();
  }, []);

  return (
    <div>

      {coords ? (
        <div>
          <Map long = {coords.longitude} latit = {coords.latitude}/>
        </div>
      ) : (
        <p>Obtendo a localização...</p>
      )}
    </div>
  );
}

export default Location;
