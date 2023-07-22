import { createSlice } from "@reduxjs/toolkit";
import IRoute from "../components/Routes/types";

type RoutesState = {
  list: IRoute[];
  searchRoute: "";
  origin: google.maps.LatLng | null;
  destination: google.maps.LatLng | null;
  directions: google.maps.DirectionsResult | null;
};

const initialState: RoutesState = {
  list: [],
  searchRoute: "",
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
      });
    },
    deleteRoute(state, action) {
      state.list = state.list.filter((route) => route.id !== action.payload);
    },
    filterRoutes(state, action) {
      console.log("state", action);

      state.searchRoute = action.payload;
    },
    setFavoriteRoute(state, action) {
      state.list = state?.list?.map((route) => {
        if (route?.id === action?.payload) {
          return { ...route, isFavorite: !route?.isFavorite };
        }
        return route;
      });
    },
    setOriginAction(state, action) {
      state.origin = action.payload;
    },
    setDestinationAction(state, action) {
      state.destination = action.payload;
    },
    setDirectionAction(state, action) {
      state.directions = action.payload;
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
  setDirectionAction,
} = routeSlice.actions;

export default routeSlice.reducer;
