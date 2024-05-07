import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateType {
  acceptCookies: boolean;
}

export const CookiesStorage = createSlice({
  name: "CookiesStorage",
  initialState: {
    acceptCookies: false,
  } as InitialStateType,
  reducers: {
    ChangeCookies(state, action: PayloadAction<boolean>) {
      state.acceptCookies = action.payload;
    },
  },
});

export const { ChangeCookies } = CookiesStorage.actions;
export default CookiesStorage.reducer;
