import { login_login } from "../graphql/user/__generated__/login";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: login_login = {
  access_token: "",
  user: {
    _id: "",
    email: "",
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<login_login>) => {
      state.access_token = action.payload.access_token;
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
