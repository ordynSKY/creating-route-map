import { Dispatch, SetStateAction } from "react";

export default interface IRoute {
  id: number | undefined;
  title: string;
  shortDescription: string;
  description: string;
  length: number;
  isFavorite: boolean;
  origin: google.maps.LatLng | null;
  destination: google.maps.LatLng | null;
}

export interface IRouteArray {
  index: number;
  route: IRoute;
  setActive: (arg: boolean) => void;
  setRoute: (arg: number | undefined) => void;
}

export interface IRouteBlock {
  setActive: (arg: boolean) => void;
  setRoute: (arg: number | undefined) => void;
}

export interface IRouteForm {
  setActive: (arg: boolean) => void;
  maxLength: number;
  length: number;
  setMapKey: Dispatch<SetStateAction<number>>;
  setLength: Dispatch<SetStateAction<number>>;
}

export type TRouteArray = IRoute[];
