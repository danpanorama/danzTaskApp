import { LOGIN, LOGOUT, CREATE_USER } from "../constants/customerConstants";

// קריאה לשרת לאתחול הלקוח (התחברות)
export const login = (userData) => async (dispatch) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    dispatch({
      type: LOGIN,
      payload: data,  // מכיל את פרטי הלקוח שהתקבלו מהשרת
    });
  } catch (error) {
    console.error('Error during login', error);
  }
};

// קריאה לשרת ליצירת משתמש חדש
export const createUser = (userData) => async (dispatch) => {
  try {
    const response = await fetch('/api/create-user', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    dispatch({
      type: CREATE_USER,
      payload: data,  // פרטי המשתמש החדש
    });
  } catch (error) {
    console.error('Error during user creation', error);
  }
};

// פעולה להתנתקות
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
