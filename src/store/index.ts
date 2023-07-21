import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "./routeSlice";

const store = configureStore({
  reducer: {
    routes: routeReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
