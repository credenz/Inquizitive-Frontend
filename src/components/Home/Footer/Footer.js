import React, { useState } from "react";
import "./Footer.css";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
} from "reactstrap";
import Ourteam from "../../ourteam_modal/Ourteam.js";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <footer className="foot">
        <div className='row justify-content-center'>© PICT IEEE Student Branch | Developed by PISB Web Team</div>
        <div className='row justify-content-center' style={{'padding-top': '0.4rem'}}><Button className="btn btn-light" style={{'font-size': '14px','padding':'0.3rem 0.3rem'}} onClick={() => setIsOpen(!isOpen)}>Ourteam</Button></div>
      </footer>
      <Modal scrollable={true} className="modal-dialog" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader  className="modal-head" toggle={() => setIsOpen(!isOpen)}>
        </ModalHeader>
        <ModalBody >
          <Ourteam/>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Footer;
