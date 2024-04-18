import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface UserSessionState {
  user: boolean;
}
const initialState: UserSessionState = {
  user: false,
};
// Слайс для данных о текущей сессии, так же тут будут данные о текущем пользователе
export const userSession = createSlice({
  name: "userSession",
  initialState,
  reducers: {
    updateUserSession(state, action: PayloadAction<boolean>) {
      state.user = action.payload;
    },
  },
});
export const { updateUserSession } = userSession.actions;
export default userSession.reducer;
