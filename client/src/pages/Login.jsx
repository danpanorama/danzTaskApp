import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
import { useNavigate, Link } from "react-router-dom";
import '../css/login.css'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password, navigate));
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={submitHandler}>
        <h2>התחברות</h2>

        <input
          type="email"
          placeholder="אימייל"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="סיסמה"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">התחבר</button>

        <p className="form-link">
          אין לך חשבון? <Link to="/register">להרשמה</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
