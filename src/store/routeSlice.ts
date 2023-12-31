import { createSlice } from "@reduxjs/toolkit";
import { TRoutesState } from "./types";

const initialState: TRoutesState = {
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
