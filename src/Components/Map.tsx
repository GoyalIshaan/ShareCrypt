import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapProps {
  lat?: number;
  long?: number;
}

L.Marker.prototype.options.icon = DefaultIcon;

// This component will update the map's center when lat or long change
const MapUpdater: React.FC<MapProps> = ({ lat, long }) => {
  const map = useMap();

  useEffect(() => {
    if (lat && long) {
      map.setView([lat, long], map.getZoom());
    }
  }, [lat, long, map]);

  return null;
};

const Map: React.FC<MapProps> = ({ lat, long }) => {
  if (!lat && !long) return null;

  const position: [number, number] =
    lat && long ? [lat, long] : [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      touchZoom={true}
      zoomControl={true}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <MapUpdater lat={lat} long={long} />
    </MapContainer>
  );
};

export default Map;
