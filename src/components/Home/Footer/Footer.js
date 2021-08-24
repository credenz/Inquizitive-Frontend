import React, { useState } from "react";
import {
  Modal, ModalBody, ModalHeader
} from "reactstrap";
import Ourteam from "../../ourteam_modal/Ourteam.js";
import "./Footer.css";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <footer className="foot">
        <div className='row justify-content-center'>© PICT IEEE Student Branch | Developed by &nbsp;<span className='webteam' onClick={() => setIsOpen(!isOpen)} > PISB Web&nbsp;Team</span></div>
      </footer>
      <Modal scrollable={true} className="modal-dialog" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader className="modal-head" toggle={() => setIsOpen(!isOpen)}>
          Meet Our Team
        </ModalHeader>
        <ModalBody >
          <Ourteam />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Footer;
