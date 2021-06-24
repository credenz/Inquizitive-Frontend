import React, { useState } from "react";
import { Router, Link } from "react-router-dom";
import "./ins.css";
import ctd from "../../images/ctd.png";
import ieee from "../../images/IEEE White.png";
import inquzi from "../../images/inquizitive.png";
const Instruction = () => {
  const [isActive, setActive] = useState(false);
  const [dest, setDest] = useState("/ins");
  const handleChecked = (e) => {
    const iA = e.target.checked;
    setActive(iA);
    //console.log("in handle checked");
    //console.log(iA);
    //make the submit button true
    if (iA) {
      setDest("/questions");
    } else {
      setDest("/ins");
    }
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      />
      <div className="ins">
        {/* <nav>
              <div className="nav-wrapper grey darken-3 ">
                <div className="containe">
                  <a href="" className="brand-logo ">
                    <img src={ctd} className="pisb" />
                  </a>
                  <div className="center hide-on-med-and-down">
                    <h2 className="inqui">INQUIZITIVE</h2>
                  </div>

                  {/* <div className="row">
                <div className="col s3 l3">
                  <a href="" className="brand-logo ">
                    <img src={ctd} className="pisb" />
                  </a>
                </div>
                <div className="col s3 l3 ">
                  <a href="" className="right pull-s1">
                    <img src={ieee} className="ieee" />
                  </a>
                </div>
                <div className="col s3 l3 ">
                  <a href="" className="">
                    <img src={ieee} className="ieee" />
                  </a>
                </div>
                <div className="col s3 l3 ">
                  
                </div>
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
                  <img src={ieee} className="ieee" />
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
        {/* <nav className="black show-on-med-and-down hide-on-large-only">
          <div className="nav-wrapper">
            <ul>
              <li>
                <img src={inquzi} className="white inqu" />
              </li>
              <a href="" className="brand-logo black">
                INQUIZITIVE
              </a>
            </ul>
          </div>
        </nav> */}
        <div className="container cont white-text">
          <header className="main-int">
            <h3 className="center ">Instructions</h3>
            <div className="divider"></div>
          </header>
          <main>
            <div className="">
              <p className="text">
                <ol>
                  <li>Participants can register online on the official CTD website.</li>
                  <li>Every participant can sign in only once. Once completed, you won't be able to sign in again.</li>
                  <li>Each question has a set time after which you won't be able to answer nor come back to it later again.</li>
                  <li>You can end test at any time using 'End Test' button.</li>
                  <li>Participants should not make spelling mistakes while writing answers, they will be considered as wrong answers.</li>
                </ol>
              </p>
            </div>
            <div className="divider"></div>
            <p className="center checkbox">
              <label>
                <input type="checkbox" id="mycheck" onClick={handleChecked} />
                <span> I have read all instructions carefully</span>
              </label>
            </p>
            <div className="center buttn ">
              <Link to={dest}>
                <button
                  className="btn waves-effect waves-light cyan "
                  disabled={!isActive}
                >
                  Proceed
                </button>
              </Link>
            </div>
          </main>
        </div>
        <footer className="page-footer black ">
          <p className="center ">
            © PICT IEEE Student Branch | Developed by PISB Web Team
          </p>
        </footer>
        {/* <footer className="page-footer grey darken-4 hide-on-mid-and-down"></footer> */}
      </div>
    </div>
  );
};

export default Instruction;
