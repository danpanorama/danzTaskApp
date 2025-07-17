import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/actions/customerActions";

const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.customers.isLoggedIn);

  const handleLogin = () => {
    const userData = { username: 'Daniel', password: '123456' };
    dispatch(login(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>התנתק</button>
      ) : (
        <button onClick={handleLogin}>התחבר</button>
      )}
    </div>
  );
};

export default Login;
