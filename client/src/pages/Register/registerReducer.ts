import { useReducer } from "react";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";

interface IRegisterState {
  registerSuccess: false;
  registerFail: false;
  errorMessage: string;
}

export enum ERegisterTypes {
  register = "REGISTER",
  result = "RESULT",
}

export type TRegisterPayload = {
  username: string;
  password1: string;
  password2: string;
  email: string;
  city: string;
  country: string;
};

export interface IRegisterAction {
  type: ERegisterTypes;
  payload: TRegisterPayload;
}

export const registerInitState: IRegisterState = { registerFail: false, registerSuccess: false, errorMessage: "" };

export const registerThunk = createAsyncThunk("registerThunk", async (payload: TRegisterPayload) => {
  let p = await axios.post("http://127.0.0.1:5000/api/v1/createNewUser", payload);
  return p.data;
});

export const registerSlice = createSlice({
  name: "register",
  initialState: registerInitState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerThunk.pending, (state, action) => {}),
      builder.addCase(registerThunk.fulfilled, (state, action) => {}),
      builder.addCase(registerThunk.rejected, (state, action) => {});
  },
});

export default registerSlice.reducer;
export const regReducer = registerSlice.reducer;
