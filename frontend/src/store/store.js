import { configureStore } from "@reduxjs/toolkit";
import responsiveReducer from "../slices/responsiveSlice";

const store = configureStore({
  reducer: {
    responsive: responsiveReducer,
  },
});

export default store;
