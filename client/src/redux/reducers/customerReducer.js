import { LOGIN, LOGOUT, CREATE_USER } from "../constants/customerConstants";

const initialState = {
  user: null,  // פרטי הלקוח
  isLoggedIn: false,  // סטטוס החיבור
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.data,  // עדכון פרטי הלקוח
        isLoggedIn: true,  // שינוי סטטוס החיבור
      };
    case LOGOUT:
      return {
        ...state,
        user: null,  // ניהול התנתקות
        isLoggedIn: false,  // שינוי סטטוס החיבור
      };
    case CREATE_USER:
      return {
        ...state,
        user: action.data,  // יצירת משתמש חדש
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default customerReducer;
