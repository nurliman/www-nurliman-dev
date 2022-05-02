import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AnimationState {
  isAnimating: boolean;
}

const initialState: AnimationState = {
  isAnimating: false,
};

export const animationSlice = createSlice({
  name: "animation",
  initialState,
  reducers: {
    setAnimating(state, action: PayloadAction<boolean>) {
      state.isAnimating = action.payload;
    },
  },
});

export const { setAnimating } = animationSlice.actions;

export default animationSlice.reducer;
