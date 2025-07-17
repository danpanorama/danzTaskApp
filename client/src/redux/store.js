// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './reducers/customerReducer';
import cartReducer from './reducers/cartReducer';
import loadingReducer from './reducers/loadingReducer'; // הוספת ה-reducer של טעינה ושגיאות

const store = configureStore({
  reducer: {
    customers: customerReducer,
    cart: cartReducer,
    loading: loadingReducer, // חיבור ה-reducer של טעינה ושגיאות
  },
  devTools: true,
});

export default store;
