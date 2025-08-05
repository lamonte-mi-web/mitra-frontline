'use client';

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useState, useCallback } from "react";

type Props = {
  onSelectLocation: (address: string, lat: number, lng: number) => void;
  defaultCenter?: { lat: number; lng: number };
};

const libraries: ("places")[] = ["places"];


export default function LocationPicker({
  onSelectLocation,
  defaultCenter = { lat: -6.200000, lng: 106.816666 }, // Jakarta
}: Props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });

  const [marker, setMarker] = useState(defaultCenter);

  const handleMapClick = useCallback(async (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setMarker({ lat, lng });

      // Reverse Geocoding
      const geocoder = new google.maps.Geocoder();
      const response = await geocoder.geocode({ location: { lat, lng } });

      const address = response.results?.[0]?.formatted_address || "";
      onSelectLocation(address, lat, lng);
    }
  }, [onSelectLocation]);

  if (loadError) return <p>Gagal memuat peta</p>;
  if (!isLoaded) return <p>Memuat peta...</p>;

  return (
    <div className="h-64 rounded-md overflow-hidden border">
      <GoogleMap
        zoom={15}
        center={marker}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        onClick={handleMapClick}
      >
        <Marker position={marker} />
      </GoogleMap>
    </div>
  );
}
