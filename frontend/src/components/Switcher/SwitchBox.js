import React from "react";
import { Route, Routes } from "react-router-dom";


import PostDetail from "../PostDetail/PostDetail";

const SwitchBox = () => {
  return (
    <Routes>
      <Route exact path="/posts/:slug" element={<PostDetail />} />
    </Routes>
  );
};

export default SwitchBox;
