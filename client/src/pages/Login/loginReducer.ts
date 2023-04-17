import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export interface ILoginState {
  loginSuccess: boolean;
  loginFail: boolean;
  isLoggedIn: boolean;
  errorMessage: string;
  currentState?: string;
  stateValue?: number;
}

export interface ILoginErrorResponse {
  message: { code: string };
}

export interface ILoginPayload {
  username: string;
  password: string;
  rememberMeFlag: boolean;
}

const loginInitialState: ILoginState = { isLoggedIn: false, loginSuccess: false, loginFail: false, errorMessage: "" };

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
  reducers: {
    reset(state) {
      state.currentState = "";
      state.errorMessage = "";
      state.loginFail = false;
      state.loginSuccess = false;
      state.stateValue = 0;
    },
    resetLoginButton(state) {
      state.isLoggedIn = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginThunk.pending, (state, action) => {
      state.currentState = "Logging in...";
      state.stateValue = 1;
      state.errorMessage = "";
      state.loginSuccess = false;
      state.loginFail = false;
      state.isLoggedIn = false;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.currentState = "Login successful. Redirecting...";
      state.stateValue = 2;
      state.errorMessage = "";
      state.loginSuccess = true;
      state.loginFail = false;
      state.isLoggedIn = true;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.currentState = "Login failed.";
      state.stateValue = 3;
      state.loginSuccess = false;
      state.loginFail = true;
      state.isLoggedIn = false;

      let typedPayload = action.payload as AxiosError<ILoginErrorResponse>;
      state.errorMessage = typedPayload.response?.data.message.code as string;
    });
  },
});

export default loginSlice.reducer;
export const { reset, resetLoginButton } = loginSlice.actions;
