import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    scheduleEvent: (state, action) => {
      state.events.push(action.payload);
    },
    removeEvent: (state) => {
      state.events = [];
    },
  },
});

export const { scheduleEvent, removeEvent } = eventSlice.actions;
export default eventSlice.reducer;
