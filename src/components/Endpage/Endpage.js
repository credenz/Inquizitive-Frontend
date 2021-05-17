import React from 'react'
import Tick from '../../images/check.png';
import './Endpage.css'
import ctd from "../../images/ctd.png";
import ieee from "../../images/IEEE White.png";
const Endpage = () => {
    return (
      <div>
        <nav>
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
        </nav>

        <div className="container endpage grey lighten-4">
          <main className="container box">
            <div className="col">
              <div className="row s4 ">
                <img className="tick center" src={Tick} />
              </div>
              <div className="center white-text">
                  <h4>
                      Your Response was submitted successfully
                  </h4>
                  <h4>
                      Thank You
                  </h4>
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
        <footer className="page-footer grey darken-4 hide-on-mid-and-down"></footer>
      </div>
    );
}

export default Endpage;