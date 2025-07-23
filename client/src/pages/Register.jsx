import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/userActions";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password, navigate));
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={submitHandler}>
        <h2>הרשמה</h2>

        <input
          type="text"
          placeholder="שם מלא"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <button type="submit">צור חשבון</button>

        <p className="form-link">
          כבר יש לך חשבון? <Link to="/login">התחברות</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
