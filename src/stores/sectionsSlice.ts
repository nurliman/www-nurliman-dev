import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from "stores";

export interface SectionsState {
  list: { id: string; name: string; icon: string }[];
  active: string;
}

const initialState: SectionsState = {
  list: [
    { id: "home", name: "Home", icon: "lnr-home" },
    { id: "about-me", name: "About Me", icon: "lnr-user" },
    { id: "resume", name: "Resume", icon: "lnr-graduation-hat" },
    { id: "portfolio", name: "Portfolio", icon: "lnr-briefcase" },
    { id: "blog", name: "Blog", icon: "lnr-book" },
    { id: "contact", name: "Contact", icon: "lnr-envelope" },
  ],
  active: "home",
};

export const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    setActive(state, action: PayloadAction<string>) {
      state.active = action.payload;
    },
  },
});

export const { setActive } = sectionsSlice.actions;

export const getActiveIndex = () => {
  return store.getState().sections.list.findIndex((x) => x.id === store.getState().sections.active);
};

export const getIndexById = (id: string) => {
  return store.getState().sections.list.findIndex((x) => x.id === id);
};

export default sectionsSlice.reducer;
