import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

import "./Modal.css";

const modalStyle = {

  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  alignItems: 'center',
  justifyContent: 'center',
  transform: "translate(0%, 0%, 0%, 0%)",
  height: "0%",
  zIndex: "1050",
};

const overlayStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  height: "100%",
  width: "100%",
  backgroundColor: "rgba(0,0,0,0.8)",
  zIndex: "1000",
};


const Modal = (props) => {
  let history = useNavigate();

  let back = (e) => {
    e.stopPropagation();
    history("/");
  };


  return ReactDOM.createPortal(
    <React.Fragment>
      <div style={modalStyle}>
        {props.children}
      </div>
      <div onClick={back} style={overlayStyle}></div>

    </React.Fragment>,
    document.getElementById("modal")
  );
};

export default Modal;
