import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input
              placeholder="Username"
              required
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              className="loginInput"
              type="email"
            /> 
             <input
              placeholder="Password"
              required
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              className="loginInput"
              type="password"
            />
            <Link to="/" style={{ textDecoration: "none" }}>
            <button className="loginButton" type="submit">
              Sign Up
            </button></Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="loginRegisterButton">Log into Account</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
}