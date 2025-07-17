// redux/reducers/cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants/cartConstants";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // במקרה של הוספה לעגלה
      const item = action.payload;
      
      // אם יש כבר פריט בעגלה, נשדרג אותו או נוסיף אותו אם לא קיים
      const existingItem = state.cartItems.find((x) => x.id === item.id);

      if (existingItem) {
        // אם פריט כבר קיים בעגלה, נשדרג את הכמות
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existingItem.id ? { ...x, quantity: x.quantity + 1 } : x
          ),
        };
      } else {
        // אם הפריט לא קיים בעגלה, נוסיף אותו כפריט חדש
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, quantity: 1 }],
        };
      }
      
    case REMOVE_FROM_CART:
      // במקרה של הסרת פריט מהעגלה
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case CLEAR_CART:
      // במקרה של ניקוי כל העגלה
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
