// redux/reducers/taskReducer.js

import { SET_TASKS, ADD_TASK, REMOVE_TASK } from "../constants/taskConstant";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.data,
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.data],
      };

    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.data),
      };

    default:
      return state;
  }
};

export default taskReducer;
