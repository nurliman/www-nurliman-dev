import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HeaderState {
  show: boolean;
}

const initialState: HeaderState = {
  show: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setShow(state, action: PayloadAction<boolean>) {
      state.show = action.payload;
    },
  },
});

export const { setShow } = headerSlice.actions;

export default headerSlice.reducer;
