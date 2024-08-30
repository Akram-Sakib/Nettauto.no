"use client";

import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
  const position: LatLngExpression = [59.742647,10, 10.1625218];

  return (
    <MapContainer
      center={position}
      zoom={20}
      className="w-full h-[400px] lg:min-h-[800px] rounded-lg border-none z-10"
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.jawg.io/{z}/{x}/{y}{r}.png?access-token=XVw7OtsXEgUkX0MGlGpYXcTPOCWtTR4GRZApVLdDzdzPGsfjzVmBfsgq8Pav75tF"
      />
    </MapContainer>
  );
};

export default Map;
