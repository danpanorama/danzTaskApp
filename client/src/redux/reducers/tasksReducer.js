// redux/reducers/taskReducer.js
import { ADD_TASK } from "../constants/taskConstant";

// נטעין מה־localStorage אם קיים
const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const initialState = {
  tasks: initialTasks,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      console.log(action.data)
      return {
        ...state,
        tasks: [...state.tasks, action.data],
      };
    default:
      return state;
  }
};

export default taskReducer;
