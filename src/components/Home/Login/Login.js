import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import "./Logincopy.css";
import Axios from "axios";

const Login = () => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    Axios.post("http://127.0.0.1:8000/api/login/", data, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("jwtToken", token);
        Axios.defaults.headers["Authorization"] =
          "Token " + localStorage.getItem("jwtToken");
        history.push("/ins");
        console.log(res.status);
        console.log(localStorage.getItem("jwtToken"));
      })
      .catch((err) => {
        console.log(err);
        console.log(JSON.stringify(err));
        alert(err.message);
      });
  };

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
        </form>
      </div>
    </div>
  );
};

export default Login;
