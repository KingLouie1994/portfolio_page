import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import styles from "./Header.module.css";

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={
        darkMode ? styles.headerContainerDark : styles.headerContainer
      }
    >
      <h3>Luis Schekerka</h3>
      <button onClick={toggleMode}>Test</button>
    </div>
  );
};

export default Header;
