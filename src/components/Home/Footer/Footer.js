import React from "react";
import "./Footer.css";
const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <footer className="foot">
        © PICT IEEE Student Branch | Developed by PISB Web Team
      </footer>
      <button style={{cursor : 'Pointer'}} onClick={() => setIsOpen(!isOpen)}>Ourteam</button>
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
