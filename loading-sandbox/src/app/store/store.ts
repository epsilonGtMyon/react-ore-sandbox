import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./loading/loadingSlice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
