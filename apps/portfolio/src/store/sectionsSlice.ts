import { createSlice } from "@reduxjs/toolkit";

export interface SectionsState {
  list: { id: string; path: string; name: string; icon: string }[];
}

const initialState: SectionsState = {
  list: [
    { id: "home", path: "/", name: "Home", icon: "lnr-home" },
    { id: "about-me", path: "/about-me", name: "About Me", icon: "lnr-user" },
    { id: "resume", path: "/resume", name: "Resume", icon: "lnr-graduation-hat" },
    { id: "portfolio", path: "/portfolio", name: "Portfolio", icon: "lnr-briefcase" },
    { id: "blog", path: "/blog", name: "Blog", icon: "lnr-book" },
    { id: "contact", path: "/contact", name: "Contact", icon: "lnr-envelope" },
  ],
};

export const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {},
});

export default sectionsSlice.reducer;
