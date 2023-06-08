import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo">Facebook</h3>
        <span className="loginDesc">
          Connect with friends and the world around you on Facebook.
        </span>
      </div>
      <div className="loginRight">
        <form className="loginBox">
          <input
            placeholder="Email"
            type="email"
            required
            className="loginInput"
          />
          <input
            placeholder="Password"
            type="password"
            required
            minLength="6"
            className="loginInput"
          />
          <button className="loginButton" type="submit" >Login
          </button>
          <span className="loginForgot">Forgot Password?</span>
          <Link to="/" style={{ textDecoration: "none" }}>
          <button className="loginRegisterButton">
          Create a New Account
          </button>
          </Link>
        </form>
      </div>
    </div>
  </div>
);
}
