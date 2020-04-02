import React, { useContext } from "react";
import styles from "./Introduction.module.css";
import { DarkModeContext } from "../darkmode/darkModeContext";

const Introduction = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div
      className={darkMode ? styles.introductionContainerDark : styles.introductionContainer}
    >
      <h1>Hey I'm a test</h1>
    </div>
  );
};

export default Introduction;
