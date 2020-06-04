import React, { useContext } from "react";
import styles from "./Header.module.css";
import { DarkModeContext } from "../darkmode/darkModeContext";
import { Icon } from "semantic-ui-react";

const Header = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={darkMode ? styles.headerContainerDark : styles.headerContainer}
    >
      <h3 className={styles.name}>Luis Schekerka</h3>
      <div className={styles.nav}>
        <a
          className={darkMode ? styles.navElementDark : styles.navElement}
          href="#elementID"
        >
          About me
        </a>
        <a
          className={darkMode ? styles.navElementDark : styles.navElement}
          href="#elementID"
        >
          Projects
        </a>
        <a
          className={darkMode ? styles.navElementDark : styles.navElement}
          href="#elementID"
        >
          Contact
        </a>
        {darkMode ? (
          <Icon onClick={toggleMode} color="yellow" name="sun" size="big" />
        ) : (
          <Icon onClick={toggleMode} color="grey" name="moon" size="big" />
        )}
      </div>
    </div>
  );
};
export default Header;
