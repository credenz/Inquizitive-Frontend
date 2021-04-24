import cat from "../images/cat.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import './Login.css';

const Login = () => {
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
                    <form>
                      <span className='d-flex justify-content-center text-light'> Username </span>
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
                        />
                      </div>
                      <span className='d-flex justify-content-center text-light'> Password </span>
                      <div class="input-group mb-3">
                      <div className="input-group-append">
                          <span className="input-group-text">
                            {/* <i className="fas fa-user"></i> */}
                            <FontAwesomeIcon icon={faKey} />
                          </span>
                        </div>
                        <input
                          type="password"
                          name=""
                          className="form-control input_pass"
                          placeholder="Password"
                        />
                      </div>
  
                      <div className="d-flex justify-content-center mt-3 login_container">
                        <button type="button" name="button" className="btn login_btn">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
    )
  }

  export default Login;