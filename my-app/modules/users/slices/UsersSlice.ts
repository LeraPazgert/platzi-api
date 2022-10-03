import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types";
import { UsersState } from "./types";

const initialState: UsersState = {
  loading: false,
  error: null,
  users: [],
  filter: {
    limit: 10,
  },
};

export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setUserList(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    setUserListError(state, action: PayloadAction<Error>) {
      state.error = action.payload;
    },
    setLimit(state, action) {
      state.filter.limit = action.payload;
    },
  },
});

const { actions, reducer } = UsersSlice;

export default reducer;
export const { setIsLoading, setUserList, setUserListError, setLimit } = actions;
