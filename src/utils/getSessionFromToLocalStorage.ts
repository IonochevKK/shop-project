import {
  InitialStateType,
  updateUserSession,
} from "../store/userSession-slise";

export const getSessionFromToLocalStorage = () => {
  return (dispatch: any) => {
    const sessionDataString = localStorage.getItem("userSession");
    if (sessionDataString) {
      const sessionData: InitialStateType = JSON.parse(sessionDataString);
      console.log(sessionData)
      dispatch(updateUserSession(sessionData));
    }
  };
};
