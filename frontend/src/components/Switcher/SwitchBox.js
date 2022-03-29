import React from "react";
import { Route, Routes } from "react-router-dom";

import PostDetail from "../PostDetail/PostDetail";
import Modal from "../Modal/Modal";


const SwitchBox = () => {

  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/posts/:slug" element={<Modal><PostDetail /></Modal>} />
      </Routes>
    </React.Fragment>
  );
};

export default SwitchBox;
