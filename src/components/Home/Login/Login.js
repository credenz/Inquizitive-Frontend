import React, { useState } from "react";
import Inq from "../../../images/inquizitive.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import {Redirect} from 'react-router-dom';
import "./Login.css";
import Axios from "axios";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true; 
  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      username: username,
      password: password
    }

    Axios.post("http://127.0.0.1:8000/api/login/", data)
      .then((res) => {
        const token = res.data.token
        if (!res.status === 200) {
          setLoginStatus(false);
        } else {
          localStorage.setItem('jwtToken', token);
          setRedirect(true);
          setLoginStatus(true);
        }
        if (token){
          Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
          delete Axios.defaults.headers.common['Authorization'];
        }
      })

      .catch((err) => {
        console.log(err);
      })
  }

  if (redirect) {
    return <Redirect to="/questions"/>
  }

  return (
    <div className="container login_card">
      <div className="d-flex justify-content-center h-100 loggin">
        <div className="user_card">
          {/* <div className="d-flex justify-content-center">
          </div> */}
          <div className="form_container">
          <div className="login">
            {/* <h2>Login</h2> */}
          </div>
            <label className="d-flex justify-content-center text-light">
              {" "}
              Username{" "}
            </label>
            <div className="input-group mb-3">
              <div className="input-group-append">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              <input
                style={{textDecoration: 'none'}}
                type="text"
                className="form-control input_user"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <label className="d-flex justify-content-center text-light">
              {" "}
              Password{" "}
            </label>
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
              />
            </div>

            <div className="d-flex justify-content-center mt-3 login_container">
              <button
                onClick={handleSubmit}
                type="button"
                name="button"
                className="btn login_btn"
              >
                Login
              </button>
            </div>
            <h1>{loginStatus}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
