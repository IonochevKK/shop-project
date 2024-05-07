import { InitialStateType } from "../store/userSession-slise";

export const GetSessionInLocalStorage = () => {
  const sessionDataString = localStorage.getItem("userSession");
  if (sessionDataString) {
    const sessionData: InitialStateType = JSON.parse(sessionDataString);
    return sessionData;
  }
};
