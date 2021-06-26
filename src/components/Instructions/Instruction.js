import React, { useState } from "react";
import { Router, Link } from "react-router-dom";
import "./in.css";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Navbar,
  NavbarBrand,
  Row,
} from "reactstrap";
import ctdlogo from "../../images/ctd.png";
import PISB from "../../images/IEEE White.png";
import Inq from "../../images/inquizitive.png";
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
        <Col>
          <Row>
            <Col>
              <h2 className="mt-4 text-center">INSTRUCTIONS</h2>
            </Col>
          </Row>
          <hr className="solid" />
          <Row>
            <Col>
              <p className="mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                // et ipsum blanditiis culpa iure odit nihil alias vero nesciunt
                // quisquam a neque corporis doloremque quasi natus, sit dolorum
                // reiciendis laborum laboriosam fugit? Ipsam, vel ipsum? Esse,
                // reiciendis, facilis suscipit doloremque praesentium officia
                // fugiat placeat repellendus dignissimos repellat eveniet sed.
                // Minima. Lorem ipsum dolor sit, amet consectetur adipisicing
                // elit. At repudiandae quod consectetur magnam repellat
                aliquam! // Perspiciatis libero est facere, unde quas ipsum
                beatae repellat // praesentium eligendi ratione delectus sequi
                corrupti. Lorem // ipsum dolor sit amet consectetur adipisicing
                elit. Veritatis // voluptas quas unde illo aliquam, ullam
                provident a aperiam // adipisci quis ut voluptate. Repellendus
                sunt hic ex, error quam // vero optio recusandae illo debitis ad
                molestias, harum nostrum // saepe, soluta aperiam? Lorem, ipsum
                dolor sit amet consectetur // adipisicing elit. Saepe et ipsum
                blanditiis culpa iure odit // nihil alias vero nesciunt quisquam
                a neque corporis doloremque // quasi natus, sit dolorum
                reiciendis laborum laboriosam fugit? // Ipsam, vel ipsum? Esse,
                reiciendis, facilis suscipit doloremque // praesentium officia
                fugiat placeat repellendus dignissimos // repellat eveniet sed.
                Minima. Lorem ipsum dolor sit, amet // consectetur adipisicing
                elit. At repudiandae quod consectetur // magnam repellat
                aliquam! Perspiciatis libero est facere, unde // quas ipsum
                beatae repellat praesentium eligendi ratione delectus // sequi
                corrupti. Lorem ipsum dolor sit amet consectetur // adipisicing
                elit. Veritatis voluptas quas unde illo aliquam, // ullam
                provident a aperiam adipisci quis ut voluptate. // Repellendus
                sunt hic ex, error quam vero optio recusandae illo // debitis ad
                molestias, harum nostrum saepe, soluta aperiam?
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
                    <h5>I have read all instructions carefully</h5>
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
        </Col>
      </Container>
      <footer className="foot">
        © PICT IEEE Student Branch | Developed by PISB Web Team
      </footer>
    </div>
  );
};

export default Instruction;













