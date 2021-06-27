import React from "react";
import { Col, Container, Navbar, Row } from "reactstrap";
import Tick from "../../images/check.png";
import ctdlogo from "../../images/ctd.png";
import Inq from "../../images/inquizitive.png";
import PISB from "../../images/PISB.png";
import Footer from "../Home/Footer/Footer";
import "./Endpage.css";

const Endpage = () => {
  return (
    // <div>
    //   <link
    //     rel="stylesheet"
    //     href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    //   />
    //   {/* <nav>
    //     <div className="nav-wrapper grey darken-4 ">
    //       <div className="containe">
    //         <a href="" className="brand-logo ">
    //           <img src={ctd} className="pisb" />
    //         </a>
    //         <div className="center hide-on-med-and-down">
    //           <h2 className="inqui">INQUIZITIVE</h2>
    //         </div>
    //       </div>
    //     </div>
    //   </nav> */}
    //   <nav className="black">
    //     <div className="nav-wrapper">
    //       <div href="" className="black brand-logo center">
    //         {/* <h4>Inquizitive</h4> */}
    //         <img src={inquzi} className="white hide-on-med-and-down inqu" />
    //         INQUIZITIVE
    //       </div>

    //       <ul className="right hide-on-med-and-down">
    //         <li>
    //           <a href="">
    //             <img src={pisb} className="ieee logo" />
    //           </a>
    //         </li>
    //         <li>
    //           <a className="grey-text text-darken-4">c</a>
    //         </li>
    //       </ul>
    //       <ul className="left hide-on-med-and-down">
    //         <li>
    //           <div>
    //             <img src={ctd} className="pisb" />
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    //   <div className="container endpage" >
    //     <main className="container box">
    //       <div className="col">
    //         <div className="row s4 ">
    //           <img className="tick center" src={Tick} />
    //         </div>
    //         <div className="center white-text">
    //           <h4>Your response was submitted successfully</h4>
    //           <h4>Thank You!</h4>
    //         </div>
    //         {/* <div className="row s4 offset-s4">
    //           <h4 className="center">
    //             Your Response was submitted successfully
    //           </h4>
    //           <h4 className="center">Thank You</h4>
    //         </div> */}
    //       </div>
    //     </main>
    //   </div>
    //   <Footer />
    // </div>

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
      <Container className="endpage-cont border border-dark ">
        <Col>
          <Row>
            <Col>
              <img className="tick center" alt='green tick' src={Tick} />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="wrt-text text-center">
                <div>YOUR RESPONSE WAS SUBMITTED SUCCESSFULLY.</div>
                <b>THANK YOU !</b>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
      <Footer />
    </div>
  );
};

export default Endpage;
