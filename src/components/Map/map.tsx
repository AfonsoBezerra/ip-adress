import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents
} from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

interface IPropsMap {
  from: number[],
  to: number[],
}
const LocationMarker = ({ to }: any) => {
  const [position, setPosition] = useState<any>(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound() {
      setPosition(to);
      map.flyTo(to, map.getZoom());
    },
    load() {
      map.locate();
    }
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const MapMap = ({ from, to }: IPropsMap) => {
  useEffect(() => {
    const dom = document.getElementById('map');
    setTimeout(() => {
      dom?.click();
    }, 1000);
  }, [to]);

  return (
    <MapContainer
      id="map"
      center={[from[0], from[1]]}
      zoom={11}
      scrollWheelZoom
      touchZoom
      zoomControl={false}
      style={{ height: '100%', width: '100%', zIndex: '1' }}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWZvbnNvYmV6ZXJyYSIsImEiOiJjbDFsMG91bWwwNjJmM2Ryeml1dm5hd29jIn0.TZm7mqSk4Q5eM6UKhowSLQ"
        attribution="Developed by &copy; <a target=_blank href=https://www.afonsobezerra.com>Afonso Bezerra</a>"
      />
      <LocationMarker to={to} />
    </MapContainer>
  );
};
export default MapMap;
