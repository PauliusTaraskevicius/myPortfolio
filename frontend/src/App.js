import React from "react";
import { useState } from "react";

import "./App.css";
import MainPage from "./components/MainPage";
import ColorPalette from "./components/ColorPalette/ColorPalette";

import { lightTheme, darkTheme } from "./theme.js";
import { GlobalStyles } from "./global.js";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyles />
        <ColorPalette toggleTheme={toggleTheme} />
        <MainPage />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
