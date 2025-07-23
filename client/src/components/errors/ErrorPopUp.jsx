import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_ERROR } from "../../redux/constants/errorLoaderConstants";
import "../../css/err.css";

const ErrorPopUp = () => {
  const dispatch = useDispatch();
  const { hasError, error } = useSelector((state) => state.error);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (hasError) {
      setVisible(true);
      const timeout = setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
        setVisible(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [hasError, dispatch]);

  const handleClose = () => {
    setVisible(false);
    dispatch({ type: CLEAR_ERROR });
  };

  if (!hasError || !visible) return null;

  return (
    <div className="global-error-popup">
      <div className="global-error-content">
        <strong>{error.title}</strong>
        <p>{error.message}</p>
        <button className="close-btn" onClick={handleClose}>×</button>
      </div>
    </div>
  );
};

export default ErrorPopUp;
