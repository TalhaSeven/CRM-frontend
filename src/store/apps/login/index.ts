import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// ** Configs
import { auth } from "@/configs/auth";
// ** Utils
import request from "@/utils/request";

export const login = createAsyncThunk("login", async (payload: any) => {
  const response = await request.post(auth.login, payload);
  return response.data;
});

export const appLoginSlice = createSlice({
  name: "appPost",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state: any, action: any) => {
      state.data = action.payload;
      localStorage.setItem("token", action.payload.token);
      state.loading = false;
    });
    builder.addCase(login.rejected, (state: any) => {
      state.loading = false;
    });
  },
});

export default appLoginSlice.reducer;
