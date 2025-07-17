// redux/actions/loadingActions.js
import { START_LOAD, STOP_LOAD, SET_ERROR } from "../constants/loadingConstants";

// אקשן להתחלת טעינה
export const startLoading = () => ({
  type: START_LOAD,
});

// אקשן לסיום טעינה
export const stopLoading = () => ({
  type: STOP_LOAD,
});

// אקשן להחזרת שגיאה
export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
