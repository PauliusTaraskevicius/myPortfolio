import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div id="item" className="modal">
        {props.children}
      </div>
      <div className="overlay"></div>
    </React.Fragment>,
    document.getElementById("modal")
  );
};

export default Modal;
