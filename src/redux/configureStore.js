import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventSlice";
import modalReducer from "./modalReducer";

export const store = configureStore({
  reducer: {
    event: eventReducer,
    modal: modalReducer,
  },
});
