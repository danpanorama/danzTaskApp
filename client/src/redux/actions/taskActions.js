// redux/actions/taskActions.js

import { SET_TASKS, ADD_TASK, REMOVE_TASK } from "../constants/taskConstant";
import { ERROR } from "../constants/errorLoaderConstants";
import axiosInstance from "../../config/AxiosConfig";
import { STOP_LOAD,START_LOAD } from "../constants/loadingConstants";

// טען את כל המשימות מהשרת
export const loadAllTasks = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOAD });

    const res = await axiosInstance.get("/tasks"); // או הנתיב שלך
    dispatch({ type: SET_TASKS, data: res.data });

  } catch (err) {
    dispatch({
      type: ERROR,
      data: { message: "שגיאה בטעינת המשימות", header: "שגיאה" },
    });
  } finally {
    dispatch({ type: STOP_LOAD });
  }
};

// הוסף משימה
// export const addNewTask = (taskData) => async (dispatch) => {
//   try {
//     dispatch({ type: START_LOAD });

//     const res = await axios.post("/tasks", taskData);
//     dispatch({ type: ADD_TASK, data: res.data });

//   } catch (err) {
//     dispatch({
//       type: ERROR,
//       data: { message: "שגיאה בהוספת משימה", header: "שגיאה" },
//     });
//   } finally {
//     dispatch({ type: STOP_LOAD });
//   }
// };




export const addNewTask = (taskData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOAD });

    dispatch({ type: ADD_TASK, data: taskData });

  } catch (err) {
    dispatch({
      type: ERROR,
      data: { message: "שגיאה בהוספת משימה", header: "שגיאה" },
    });
  } finally {
    dispatch({ type: STOP_LOAD });
  }
};


// מחק משימה לפי ID
export const removeTask = (taskId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOAD });

    await axios.delete(`/tasks/${taskId}`);
    dispatch({ type: REMOVE_TASK, data: taskId });

  } catch (err) {
    dispatch({
      type: ERROR,
      data: { message: "שגיאה במחיקת משימה", header: "שגיאה" },
    });
  } finally {
    dispatch({ type: STOP_LOAD });
  }
};
