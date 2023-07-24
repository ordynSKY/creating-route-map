import React, { useState, useEffect, FC } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";
import { Button } from "@chakra-ui/button";
import { useAppDispatch } from "../../store/hook";
import { setDestinationAction, setOriginAction } from "../../store/routeSlice";
import { IGoogleMapsForm } from "./types";

const containerStyle = {
  width: "100%",
  maxWidth: "600px",
  height: "488px",
};

const center = {
  lat: 48.46428811220518,
  lng: 35.047428863794075,
};

const GoogleMapsForm: FC<IGoogleMapsForm> = ({ setLength, mapKey }) => {
  const [origin, setOrigin] = useState<google.maps.LatLng | null>(null);
  const [destination, setDestination] = useState<google.maps.LatLng | null>(
    null
  );
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (directions) {
      const route = directions.routes[0];
      let length = 0;

      for (let i = 0; i < route.legs.length; i++) {
        length += route.legs[i].distance?.value || 0;
      }

      length = length / 1000;

      setLength(length);
    }
  }, [directions]);

  const onMapClick = (event: google.maps.MapMouseEvent) => {
    if (!origin) {
      setOrigin(event.latLng);
      dispatch(setOriginAction(event.latLng));
    } else if (!destination) {
      setDestination(event.latLng);
      dispatch(setDestinationAction(event.latLng));
    } else {
      setOrigin(null);
      dispatch(setOriginAction(null));
      setDestination(null);
      dispatch(setDestinationAction(null));
      setDirections(null);
      setLength(0);
    }
  };

  const onDirectionsLoad = (
    directions: google.maps.DirectionsResult | null
  ) => {
    setDirections(directions);
  };

  const calculateRoute = () => {
    if (origin && destination) {
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
      <br />
      <LoadScript googleMapsApiKey="AIzaSyDQdPtO_rISuddzAew90sDrepPIXj5wp1s">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          onClick={onMapClick}
          key={mapKey}
        >
          {origin && (
            <Marker
              position={origin.toJSON()}
              key={origin.toJSON().toString()}
            />
          )}
          {destination && (
            <Marker
              position={destination.toJSON()}
              key={destination.toJSON().toString()}
            />
          )}
          {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{ directions: directions }}
            />
          )}
        </GoogleMap>
      </LoadScript>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button colorScheme="blue" onClick={calculateRoute}>
          Calculate Route
        </Button>
      </div>
    </div>
  );
};

export default GoogleMapsForm;
