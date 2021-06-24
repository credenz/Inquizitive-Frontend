import React from 'react'
import Tick from '../../images/check.png';
import './Endpage.css'
import ctd from "../../images/ctd.png";
import pisb from "../../images/PISB.png";
import inquzi from "../../images/inquizitive.png";
const Endpage = () => {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        {/* <nav>
          <div className="nav-wrapper grey darken-4 ">
            <div className="containe">
              <a href="" className="brand-logo ">
                <img src={ctd} className="pisb" />
              </a>
              <div className="center hide-on-med-and-down">
                <h2 className="inqui">INQUIZITIVE</h2>
              </div>
            </div>
          </div>
        </nav> */}
        <nav className="black">
          <div className="nav-wrapper">
            <div href="" className="black brand-logo center">
              {/* <h4>Inquizitive</h4> */}
              <img src={inquzi} className="white hide-on-med-and-down inqu" />
              INQUIZITIVE
            </div>

            <ul className="right hide-on-med-and-down">
              <li>
                <a href="">
                  <img src={pisb} className="ieee logo" />
                </a>
              </li>
              <li>
                <a className="grey-text text-darken-4">c</a>
              </li>
            </ul>
            <ul className="left hide-on-med-and-down">
              <li>
                <div>
                  <img src={ctd} className="pisb" />
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container endpage" >
          <main className="container box">
            <div className="col">
              <div className="row s4 ">
                <img className="tick center" src={Tick} />
              </div>
              <div className="center white-text">
                <h4>Your response was submitted successfully</h4>
                <h4>Thank You!</h4>
              </div>
              {/* <div className="row s4 offset-s4">
                <h4 className="center">
                  Your Response was submitted successfully
                </h4>
                <h4 className="center">Thank You</h4>
              </div> */}
            </div>
          </main>
        </div>
        <footer className="page-footer black ">
          <p className="center ">
            © PICT IEEE Student Branch | Developed by PISB Web Team
          </p>
        </footer>
      </div>
    );
}

export default Endpage;