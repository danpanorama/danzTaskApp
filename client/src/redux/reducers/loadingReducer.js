// redux/reducers/loadingReducer.js
import { START_LOAD, STOP_LOAD, SET_ERROR } from '../constants/loadingConstants';

const initialState = {
  loading: false,
  error: null, // שגיאה שתשמור את ההודעה
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOAD:
      return { ...state, loading: true, error: null }; // נתחיל טעינה, נכסות לא null השגיאות
    case STOP_LOAD:
      return { ...state, loading: false }; // נעצור טעינה
    case SET_ERROR:
      return { ...state, error: action.payload }; // שמירת השגיאה
    default:
      return state;
  }
};

export default loadingReducer;
