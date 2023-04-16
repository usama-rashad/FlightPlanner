import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface ILoginState {
  loginSuccess: boolean;
  loginFail: boolean;
  errorMessage: string;
  currentState?: string;
  stateValue?: number;
}

export interface ILoginPayload {
  username: string;
  password: string;
}

const loginInitialState: ILoginState = { loginSuccess: false, loginFail: false, errorMessage: "" };

export const loginThunk = createAsyncThunk("login", async (userData: ILoginPayload, { rejectWithValue, fulfillWithValue }) => {
  try {
    let axiosResponse = await axios.post("http://127.0.0.1:5000/api/v1/loginUser", userData);
    return fulfillWithValue(axiosResponse.data);
  } catch (e) {
    return rejectWithValue(e);
  }
});

const loginSlice = createSlice({
  name: "loginThunk",
  initialState: loginInitialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginThunk.pending, (state, action) => {
      state.currentState = "Logging in...";
      state.stateValue = 0;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.currentState = "Login successfull.";
      state.stateValue = 2;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.currentState = "Login failed.";
      state.stateValue = 3;
    });
  },
});

export default loginSlice.reducer;
