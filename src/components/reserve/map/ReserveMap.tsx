'use client';

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

const customIcon = new L.Icon({
  iconUrl: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png',
  iconSize: [27, 43],
  iconAnchor: [13, 43],
  popupAnchor: [0, -36],
  shadowSize: [41, 41],
});

interface MarkerType {
  lat: number;
  lng: number;
}

interface ReserveMapProps {
  location?: MarkerType;
}

const AddMarkerOnClick: React.FC<{ setMarker: React.Dispatch<React.SetStateAction<MarkerType | null>> }> = ({ setMarker }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setMarker({ lat, lng });
    },
  });
  return null;
};

const ReserveMap: React.FC<ReserveMapProps> = ({ location }) => {
  const [marker, setMarker] = useState<MarkerType | null>(location || null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => document.documentElement.classList.contains('dark');
    setIsDark(checkDark());

    const observer = new MutationObserver(() => {
      setIsDark(checkDark());
    });
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

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
