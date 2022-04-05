import React from "react";
import { useState } from "react";

import "./App.css";
import MainPage from "./components/MainPage";
import ColorPalette from "./components/ColorPalette/ColorPalette";

import { lightTheme, darkTheme } from "./theme.js";
import { GlobalStyles } from "./global.js";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <ColorPalette toggleTheme={toggleTheme} />
        <MainPage />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
