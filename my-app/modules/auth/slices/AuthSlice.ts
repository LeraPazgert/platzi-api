import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState: AuthState = {
  isAuth: null,
  profile: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload.profile;
      state.isAuth = action.payload.isAuth;
    },
    exit(state) {
      state.profile = null;
      state.isAuth = false;
    },
  },
});

const { actions, reducer } = AuthSlice;
export default reducer;
export const { setProfile, exit } = actions;
