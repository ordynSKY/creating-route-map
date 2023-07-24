import IRoute from "../components/Routes/types";

export type TRoutesState = {
  list: IRoute[];
  searchRoute: "";
  searchDescription: "";
  origin: google.maps.LatLng | null;
  destination: google.maps.LatLng | null;
  directions: google.maps.DirectionsResult | null;
};
