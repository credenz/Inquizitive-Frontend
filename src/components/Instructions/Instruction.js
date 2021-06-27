import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Navbar, Row } from "reactstrap";
import ctdlogo from "../../images/ctd.png";
import Inq from "../../images/inquizitive.png";
import PISB from "../../images/PISB.png";
import Footer from "../Home/Footer/Footer";
import "./in.css";

const Instruction = () => {
  const [isActive, setActive] = useState(false);
  const [dest, setDest] = useState("/ins");
  const handleChecked = (e) => {
    const iA = e.target.checked;
    setActive(iA);
    if (iA) {
      setDest("/questions");
    } else {
      setDest("/ins");
    }
  };

  return (

    <div>
      <Navbar fixed="top" color="" dark className="MyNavs">
        <div className="d-none d-md-block">
          <img alt="logo" src={ctdlogo} width="75px"></img>
        </div>
        <div className="name">
          <img
            src={Inq}
            className="inqzlogo"
            alt=""
            width="50px"
            height="50px"
          />
          <strong> INQUIZITIVE</strong>
        </div>
        <div className="d-none d-sm-block">
          <img src={PISB} alt="PISB Logo" width="100px" className="logo"></img>
        </div>
      </Navbar>
      <Container className="main-cont border border-dark ">
          <Row>
            <Col>
              <h2 className="mt-4 text-center">INSTRUCTIONS</h2>
            </Col>
          </Row>
          <hr className="solid" />
          <Row>
            <Col>
              <p className="mt-4 ml-4">
                <ol>
                  <li>Before starting the quiz, make sure that you have a <b>stable network.</b></li>
                  <li>Every participant can sign in <b>only once</b>. Once completed, you won't be able to sign in again.</li>
                  <li>Each question has a set time after which you won't be able to answer nor come back to it later again.</li>
                  <li>You can end test at any time using <b>'End Test'</b> button.</li>
                  <li>Participants should not make spelling mistakes while writing answers, they will be considered as wrong answers.</li>
                </ol>
              </p>
            </Col>
          </Row>
          <hr className="solid" />
          <Row>
            <Col>
              <div className="text-center mt-3">
                <div class="boxes ">
                  <input type="checkbox" onChange={handleChecked} id="box-3" />
                  <label for="box-3">
                    <h5>I have read all the instructions carefully</h5>
                  </label>
                </div>
                <Link to={dest}>
                  <button
                    disabled={!isActive}
                    type="button"
                    class="text-center submit-btn mt-2 mb-4 btn btn-success btn-lg"
                  >
                    Proceed
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Instruction;













