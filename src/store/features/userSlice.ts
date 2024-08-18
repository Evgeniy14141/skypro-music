import { fetchToken, signIn } from "@/api/login";
import { TokenType } from "@/types/token";
import { UserType } from "@/types/user";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getToken = createAsyncThunk(
  "user/getToken",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await fetchToken({ email, password });
    return response;
  }
);
type UserStateType = {
  user: UserType | null;
  tokens: TokenType | null;
};

const initialState: UserStateType = {
  user: null,
  tokens: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.tokens = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export const userReducer = userSlice.reducer;