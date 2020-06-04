import React, { useContext } from "react";
import styles from "./Introduction.module.css";
import { DarkModeContext } from "../darkmode/darkModeContext";

const Introduction = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div
      className={
        darkMode
          ? styles.introductionContainerDark
          : styles.introductionContainer
      }
    >
      <div className={styles.greeting}>
        <h1 className={styles.name}>Hi, I'm Luis!</h1>
        <p className={styles.info}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
