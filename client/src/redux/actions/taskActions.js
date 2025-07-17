// src/redux/actions/taskActions.js
import { ADD_TASK } from "../constants/taskConstant";
import { ERROR } from "../constants/errorLoaderConstants";

export const addNewTask = (task) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_TASK,
      data: task,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      data: { message: "שגיאה בהוספת משימה", header: "שגיאה" },
    });
  }
};


// // קריאה לשרת לאתחול הלקוח (התחברות)
// export const login = (userData) => async (dispatch) => {
//   try {
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       body: JSON.stringify(userData),
//       headers: { 'Content-Type': 'application/json' }
//     });
//     const data = await response.json();
//     dispatch({
//       type: LOGIN,
//       payload: data,  // מכיל את פרטי הלקוח שהתקבלו מהשרת
//     });
//   } catch (error) {
//     console.error('Error during login', error);
//   }
// };
