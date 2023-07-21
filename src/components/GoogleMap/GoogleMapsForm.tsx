import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";
import { Button } from "@chakra-ui/button";

const containerStyle = {
  width: "100%",
  maxWidth: "600px",
  height: "488px",
};

const center = {
  lat: 48.46428811220518,
  lng: 35.047428863794075,
};

interface IGoogleMapsForm {
  setLength: (arg: number) => void;
}

const GoogleMapsForm: React.FC<IGoogleMapsForm> = ({ setLength }) => {
  const [origin, setOrigin] = useState<google.maps.LatLng | null>(null);
  const [destination, setDestination] = useState<google.maps.LatLng | null>(
    null
  );
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [routeLength, setRouteLength] = useState<number>(0);

  useEffect(() => {
    // Calculate and set the route length when directions change
    if (directions) {
      const route = directions.routes[0];
      let length = 0;

      // Sum up the distance of each leg of the route
      for (let i = 0; i < route.legs.length; i++) {
        length += route.legs[i].distance?.value || 0;
      }

      // Convert length to kilometers (or any other unit you prefer)
      length = length / 1000;

      setRouteLength(length);
      setLength(length);
    }
  }, [directions]);

  const onMapClick = (event: google.maps.MapMouseEvent) => {
    if (!origin) {
      setOrigin(event.latLng);
    } else if (!destination) {
      setDestination(event.latLng);
    } else {
      // If both origin and destination are already set, reset them on map click
      setOrigin(null);
      setDestination(null);
      setDirections(null);
      setRouteLength(0);
      setLength(0);
    }
  };

  const onDirectionsLoad = (directions: google.maps.DirectionsResult | any) => {
    setDirections(directions);
  };

  const calculateRoute = () => {
    if (origin && destination) {
      setDirections(null); // Clear previous directions

      // Use the DirectionsService to calculate the route
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
  };

  return (
    <div>
      <p>Click on the map to set the origin and destination.</p>
      {/* <br />
      {origin && <p>Origin: {origin.toUrlValue()}</p>}
      {destination && <p>Destination: {destination.toUrlValue()}</p>} */}
      <br />
      {/*{routeLength > 0 && <p>Route Length: {routeLength} km</p>} */}
      <LoadScript googleMapsApiKey="AIzaSyDQdPtO_rISuddzAew90sDrepPIXj5wp1s">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          onClick={onMapClick}
        >
          {origin && <Marker position={origin} />}
          {destination && <Marker position={destination} />}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button colorScheme="blue" onClick={calculateRoute}>
          Calculate Route
        </Button>
      </div>
      {/* <button onClick={calculateRoute} disabled={!origin || !destination}>
        
      </button> */}
    </div>
  );
};

export default GoogleMapsForm;
