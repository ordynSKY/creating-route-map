export interface IDisplayMap {
  origin: google.maps.LatLng | null;
  destination: google.maps.LatLng | null;
}

export interface IGoogleMapsForm {
  setLength: (arg: number) => void;
  mapKey: number;
}
