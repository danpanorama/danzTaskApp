import {  ERROR } from "../constants/errorLoaderContext";

export const startError = (error) => async (dispatch) => {
  try {
   
    dispatch({
      type: ERROR,
      data: error,  // פרטי המשתמש החדש
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      data: {message:'',header:""},  // פרטי המשתמש החדש
    });
  }
};


