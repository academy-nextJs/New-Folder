'use client';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';

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


const AddMarkerOnClick: React.FC<{ setMarker: React.Dispatch<React.SetStateAction<MarkerType | null>> }> = ({ setMarker }) => {
    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            setMarker({ lat, lng });
        },
    });
    return null;
};

const ReserveMap: React.FC = () => {
    const [marker, setMarker] = useState<MarkerType | null>(null);

    return (
        <MapContainer
            style={{ height: "100%", width: "100%", borderRadius: "40px" }}
            center={[35.6892, 51.3890]}
            zoom={13}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <AddMarkerOnClick setMarker={setMarker} />
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
