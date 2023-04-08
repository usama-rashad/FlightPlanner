import { useReducer } from "react";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import axios, { AxiosError } from "axios";

interface IRegisterState {
  state: number;
  text: string;
  errorMessage: string;
  buttonColor: string;
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

export const registerInitState: IRegisterState = { state: 0, text: "Register", errorMessage: "", buttonColor: "default" };

export const registerThunk = createAsyncThunk("registerThunk", async (payload: TRegisterPayload) => {
  const axios_response = await axios.post("http://127.0.0.1:5000/api/v1/createNewUser", payload).catch((err: AxiosError) => {
    err.response?.data;
  });
  return axios_response;
});

export const registerSlice = createSlice({
  name: "register",
  initialState: registerInitState,
  reducers: {
    reset(state) {
      state.state = 0;
      state.text = "Register";
      state.buttonColor = "default";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerThunk.pending, (state, action) => {
      state.state = 1;
      state.text = "Wait";
      state.buttonColor = "default";
      state.errorMessage = "";
    }),
      builder.addCase(registerThunk.fulfilled, (state, action) => {
        state.state = 2;
        state.text = "Done";
        state.buttonColor = "green";
      }),
      builder.addCase(registerThunk.rejected, (state, action) => {
        state.state = 3;
        state.text = "Error";
        state.buttonColor = "red";
        state.errorMessage = action.error.message as string;
      });
  },
});

export const { reset } = registerSlice.actions;
export default registerSlice.reducer;
export const regReducer = registerSlice.reducer;
