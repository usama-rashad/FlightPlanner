import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./pages/Register/registerReducer";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type storeDispatch = typeof store.dispatch;
export const AppDispatch = useDispatch<storeDispatch>;
