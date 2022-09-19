import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieReducer";

let store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export default store;
