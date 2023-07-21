import { createSlice } from "@reduxjs/toolkit";
import IRoute from "../components/Routes/types";

type RoutesState = {
  list: IRoute[];
  searchRoute: "";
};

const initialState: RoutesState = {
  list: [],
  searchRoute: "",
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
      });
    },
    deleteRoute(state, action) {
      state.list = state.list.filter((route) => route.id !== action.payload);
    },
    filterRoutes(state, action) {
      console.log("state", action);

      state.searchRoute = action.payload;
    },
  },
});

export const { oneNewRoute, deleteRoute, filterRoutes } = routeSlice.actions;

export default routeSlice.reducer;
