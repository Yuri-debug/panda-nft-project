import { createSlice } from "@reduxjs/toolkit";

const OpenMenu = createSlice({
  name: "OpenMenu",
  initialState: {
    isClicked: false,
  },
  reducers: {
    setClick: (state) => {
      state.isClicked = !state.isClicked;
    },
  },
});

export const { setClick } = OpenMenu.actions;
export default OpenMenu.reducer
