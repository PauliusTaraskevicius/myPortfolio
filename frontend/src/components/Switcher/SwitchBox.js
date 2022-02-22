import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "../../components/MainPage";
import About from "../About/About";

const SwitchBox = () => {
  return (
    <Routes>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/about" component={About} />
      {/* <Route exact path="/users/:id" component={About} />
      <Route exact path="/users/:id/photos" component={Gallery} />
      <Route exact path="/feed" component={NewsFeed} />
      <Route exact path="/edit-profile" component={EditProfile} /> */}
    </Routes>
  );
};

export default SwitchBox;
