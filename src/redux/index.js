import { configureStore } from "@reduxjs/toolkit";
import OpenMenuReducer from "./OpenMenu/OpenMenu";

const store = configureStore({
  reducer: {
    openMenu: OpenMenuReducer,
  },
  middleware: []
});

export { store };
