import axios from "axios";
import { SET_USER, LOGOUT_USER } from "../constants/userConstants";
import { ERROR } from "../constants/errorLoaderConstants";

export const loginUser = (email, password, navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      dispatch({ type: SET_USER, data: data.user });
      navigate("/myTasks");

    } catch (error) {
      dispatch({
        type: ERROR,
        data: error?.response?.data?.message || "שגיאת התחברות",
      });
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    await axios.get("/api/auth/logout", { withCredentials: true });
    dispatch({ type: LOGOUT_USER });
  };
};
export const registerUser = (name, email, password, navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "/api/auth/register",
        { fullName: name, email, password },
        { withCredentials: true }
      );

      dispatch({ type: SET_USER, data: data.user });
      navigate("/myTasks");
    } catch (error) {
      dispatch({
        type: ERROR,
        data: error?.response?.data?.message || "שגיאת הרשמה",
      });
    }
  };
};
