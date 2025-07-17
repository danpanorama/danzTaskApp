// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './reducers/errorReducer';
import taskReducer from './reducers/tasksReducer';
import loadingReducer from './reducers/loadingReducer'; 

const store = configureStore({
  reducer: {
    error: errorReducer,
    task: taskReducer,
    loading: loadingReducer, 
  },
  devTools: true,
});

export default store;
