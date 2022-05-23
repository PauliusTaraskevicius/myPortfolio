import React from "react";
import ReactDOM from "react-dom";

import { useNavigate } from "react-router-dom";

import "./Modal.css";

const Modal = (props) => {

  let history = useNavigate();
  let back = (e) => {
    e.stopPropagation();
    history("/");
  };

  return ReactDOM.createPortal(
    <React.Fragment>
      <div id="item" className="modal" onClick={back}>
        {props.children}
      </div>
      <div className="overlay"></div>
    </React.Fragment>,
    document.getElementById("modal")
  );
};

export default Modal;
