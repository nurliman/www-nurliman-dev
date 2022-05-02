import { createSlice } from "@reduxjs/toolkit";

export interface MeState {
  name: string;
  titles: string[];
}

const initialState: MeState = {
  name: "Nurliman Diara",
  titles: ["Web Developer", "Frontend Developer"],
};

export const meSlice = createSlice({
  name: "me",
  initialState,
  reducers: {},
});

export default meSlice.reducer;
