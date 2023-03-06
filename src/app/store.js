import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  // Combines all the reducers into a single root reducer allowing the app to use them
  reducer: {
    counter: counterReducer,
  },
});
