import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  showCount: 0,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    show(state) {
      state.showCount++;
    },
    hide(state) {
      if (state.showCount > 0) {
        state.showCount--;
      }
    },
  },
});

//---------------
//reducer
export const loadingReducer = loadingSlice.reducer;

//---------------
//action
export const { show, hide } = loadingSlice.actions;

//---------------
//selector
export const isVisible = (state: RootState) => state.loading.showCount > 0;
