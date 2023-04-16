import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// Reducers
import registerReducer from "./pages/Register/registerReducer";
import loginReducer from "./pages/Login/loginReducer";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type storeDispatch = typeof store.dispatch;
export const AppDispatch = useDispatch<storeDispatch>;
