// redux/reducers/errorReducer.js
import { ERROR, CLEAR_ERROR } from "../constants/errorLoaderConstants";

const initialState = {
  error: {
    title: "",
    message: "",
  },
  hasError: false,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: {
          title: action.payload.title,
          message: action.payload.message,
        },
        hasError: true,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: {
          title: "",
          message: "",
        },
        hasError: false,
      };

    default:
      return state;
  }
};

export default errorReducer;
