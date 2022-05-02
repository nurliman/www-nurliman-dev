import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import animationReducer from "./animationSlice";
import headerReducer from "./headerSlice";
import meReducer from "./meSlice";
import sectionsReducer from "./sectionsSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      animation: animationReducer,
      header: headerReducer,
      me: meReducer,
      sections: sectionsReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
