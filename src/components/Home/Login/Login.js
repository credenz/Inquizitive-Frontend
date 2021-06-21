import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";
import "./Logincopy.css";
import Axios from "axios";
import DjangoServerUrl from "../../../urls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    console.log("Hi");

    Axios.post(DjangoServerUrl + "api/login/", data)
      .then((res) => {
        const token = res.data.token;
        if (!res.status === 200) {
          setLoginStatus(false);
        } else {
          localStorage.setItem("jwtToken", token);
          setRedirect(true);
          setLoginStatus(true);
        }
      })
      .catch((err) => {
        alert("Session expired. You have already attempted the quiz.");
        console.log(err);
      });
  };

  if (redirect) {
    return <Redirect to="/ins" />;
  }

  return (
    <div className="login-container">
      <div className="login-title">Sign In</div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-append">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
            <input
              type="text"
              className="form-control input_user"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div class="input-group mb-3">
            <div className="input-group-append">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faKey} />
              </span>
            </div>
            <input
              type="password"
              className="form-control input_pass"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="login-btn-control">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
          <div>{loginStatus}</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
