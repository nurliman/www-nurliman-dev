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
  address: "Ujungberung, Bandung",
  email: "nurlimandiara@gmail.com",
  phone: {
    display: "+62 821-3325-8511",
    value: 6282133258511,
  },
};

export const meSlice = createSlice({
  name: "me",
  initialState,
  reducers: {},
});

export default meSlice.reducer;
