import { createSlice } from "@reduxjs/toolkit";
import IRoute from "../components/Routes/types";

type RoutesState = {
  list: IRoute[];
  searchRoute: "";
  searchDescription: "";
  origin: google.maps.LatLng | null;
  destination: google.maps.LatLng | null;
  directions: google.maps.DirectionsResult | null;
};

const initialState: RoutesState = {
  list: [],
  searchRoute: "",
  searchDescription: "",
  origin: null,
  destination: null,
  directions: null,
};

const routeSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    oneNewRoute(state, action) {
      state.list.push({
        id: Date.now(),
        title: action.payload.title,
        shortDescription: action.payload.shortDescription,
        description: action.payload.description,
        length: action.payload.length,
        isFavorite: false,
        origin: action.payload.origin,
        destination: action.payload.destination,
      });
    },
    deleteRoute(state, action) {
      state.list = state.list.filter((route) => route.id !== action.payload);
    },
    filterRoutes(state, action) {
      state.searchRoute = action.payload;
    },
    setFavoriteRoute(state, action) {
      const i = state?.list?.findIndex(
        (route) => route?.id === action?.payload
      );
      const el = state.list[i];
      if (el) state.list[i] = { ...el, isFavorite: !el?.isFavorite };
    },
    setOriginAction(state, action) {
      state.origin = action.payload;
    },
    setDestinationAction(state, action) {
      state.destination = action.payload;
    },
  },
});

export const {
  oneNewRoute,
  deleteRoute,
  filterRoutes,
  setFavoriteRoute,
  setOriginAction,
  setDestinationAction,
} = routeSlice.actions;

export default routeSlice.reducer;
