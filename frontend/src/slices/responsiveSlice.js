import { createSlice } from "@reduxjs/toolkit";

const responsiveSlice = createSlice({
  name: "responsive",
  initialState: {
    header: false,
  },
  reducers: {
    setHeader: (state, action) => {
      state.header = !state.header;
    },
  },
});
export const { setHeader } = responsiveSlice.actions;
export default responsiveSlice.reducer;
