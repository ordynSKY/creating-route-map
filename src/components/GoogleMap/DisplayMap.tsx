import React, { useState, useEffect } from "react";
import { GoogleMap, DirectionsRenderer, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  maxWidth: "600px",
  height: "488px",
};

const center = {
  lat: 48.46428811220518,
  lng: 35.047428863794075,
};

const DisplayMap: React.FC<any> = ({ origin, destination }) => {
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);

  const onDirectionsLoad = (directions: google.maps.DirectionsResult | any) => {
    setDirections(directions);
  };

  useEffect(() => {
    if (origin && destination) {
      setDirections(null);

      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            onDirectionsLoad(result);
          } else {
            console.error("Error calculating route:", status);
          }
        }
      );
    }
  }, [origin, destination]);

  return (
    <div key={origin}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        {origin && <Marker position={origin} />}
        {destination && <Marker position={destination} />}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
};

export default DisplayMap;
