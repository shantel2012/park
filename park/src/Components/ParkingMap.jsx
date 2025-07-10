import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon paths
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const mockLiveSpots = [
  {
    id: 1,
    title: "City Mall Parking",
    position: [-17.8312, 31.0456],
    status: "Available",
  },
  {
    id: 2,
    title: "Airport Long Term",
    position: [-17.931, 31.09],
    status: "Full",
  },
  {
    id: 3,
    title: "Hospital Parking Bay",
    position: [-17.8201, 31.0601],
    status: "Available",
  },
];

function FitMapBounds({ spots }) {
  const map = useMap();

  useEffect(() => {
    if (spots.length > 0) {
      const bounds = L.latLngBounds(spots.map((s) => s.position));
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [spots, map]);

  return null;
}

export default function GpsMap() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    // Simulate live fetching
    const timer = setTimeout(() => {
      setSpots(mockLiveSpots);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6 drop-shadow">
        Live Parking Map
      </h1>
      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl">
        <MapContainer
          center={[-17.8292, 31.0522]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "600px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          <FitMapBounds spots={spots} />

          {spots.map((spot) => (
            <Marker key={spot.id} position={spot.position}>
              <Popup>
                <strong>{spot.title}</strong>
                <br />
                Status: {spot.status === "Available" ? "🟢" : "🔴"} {spot.status}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </main>
  );
}
