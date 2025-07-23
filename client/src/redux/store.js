import { configureStore } from "@reduxjs/toolkit";
import errorReducer from "./reducers/errorReducer";
import taskReducer from "./reducers/tasksReducer";
import loadingReducer from "./reducers/loadingReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    error: errorReducer,
    task: taskReducer,
    loading: loadingReducer,
    user: userReducer,
  },
  devTools: true,
});

export default store;
