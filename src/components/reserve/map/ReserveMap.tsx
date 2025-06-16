'use client';

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { customIcon } from "@/utils/helper/map/MapIcon";
import AddMarkerOnClick from "./AddMarkerOnClick";

interface MarkerType {
  lat: number;
  lng: number;
}

interface ReserveMapProps {
  location?: MarkerType;
}

const ReserveMap: React.FC<ReserveMapProps> = ({ location }) => {
  const [marker, setMarker] = useState<MarkerType | null>(location || null);
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      const checkDark = () => document.documentElement.classList.contains('dark');
      setIsDark(checkDark());

      const observer = new MutationObserver(() => {
        setIsDark(checkDark());
      });
      observer.observe(document.documentElement, { attributes: true });

      return () => observer.disconnect();
    }
  }, []);

  if (!isMounted) return null;

  const darkTiles = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
  const lightTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  const mapCenter: [number, number] = marker
    ? [marker.lat, marker.lng]
    : [35.6892, 51.3890];

  return (
    <MapContainer
      style={{ height: '100%', width: '100%', borderRadius: '40px' }}
      center={mapCenter}
      zoom={13}
    >
      <TileLayer
        key={isDark ? 'dark' : 'light'}
        url={isDark ? darkTiles : lightTiles}
        attribution="&copy; OpenStreetMap contributors"
      />

      {!location && <AddMarkerOnClick setMarker={setMarker} />}

      {marker && (
        <Marker position={[marker.lat, marker.lng]} icon={customIcon}>
          <Popup>
            موقعیت: {marker.lat.toFixed(4)}, {marker.lng.toFixed(4)}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default ReserveMap;
