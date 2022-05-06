import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Nurliman Diara",
  titles: [
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript/TypeScript Programmer",
    "DevOps",
    "Linux Administrator",
    "UI/UX Designer",
    "Graphic Designer",
  ],
};

export const meSlice = createSlice({
  name: "me",
  initialState,
  reducers: {},
});

export default meSlice.reducer;
