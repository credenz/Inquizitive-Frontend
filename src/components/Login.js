import React, {useState}from 'react';
import cat from "../images/cat.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import './Login.css';
import axios from 'axios';
const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
      axios.post("http://127.0.0.1:8000/login", {
        username: username,
        password: password,
      })
        .then(res => {
            if(!res.data.message){
              setLoginStatus(res.data.message);
            }else{
              console.log(res.data);
              setLoginStatus(res.data[0].username);
            };
        })

        .catch(err => {
          console.log(err);
        })
    }

    return(
      <div className="container h-100">
              <div className="d-flex justify-content-center h-100">
                <div className="user_card">
                  <div className="d-flex justify-content-center">
                    <div className="brand_logo_container">
                      <img src={cat} className="brand_logo" alt="Logo" />
                    </div>
                  </div>
                  <div className="form_container">
                    {/* <form> */}
                      <label className='d-flex justify-content-center text-light'> Username </label>
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
                          onChange={e => setUsername(e.target.value)}
                        />
                      </div>
                      <label className='d-flex justify-content-center text-light'> Password </label>
                      <div class="input-group mb-3">
                      <div className="input-group-append">
                          <span className="input-group-text">
                            {/* <i className="fas fa-user"></i> */}
                            <FontAwesomeIcon icon={faKey} />
                          </span>
                        </div>
                        <input
                          type="password"
                          className="form-control input_pass"
                          placeholder="Password"
                          onChange={e => setPassword(e.target.value)}
                        />
                      </div>
  
                      <div className="d-flex justify-content-center mt-3 login_container">
                        <button onClick={handleSubmit} type="button" name="button" className="btn login_btn">
                          Login
                        </button>
                      </div>
                      <h1>{loginStatus}</h1>
                    {/* </form> */}
                  </div>
                </div>
              </div>
            </div>
    )
  }

  export default Login;