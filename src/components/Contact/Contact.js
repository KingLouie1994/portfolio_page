import React, { useContext } from "react";
import styles from "./Contact.module.css";
import { DarkModeContext } from "../darkmode/darkModeContext";

const Contact = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div
      className={
        darkMode ? styles.contactContainerDark : styles.contactContainer
      }
    >
      <div className={styles.contact}>
        <h1 className={styles.heading}>Contact</h1>
        <p className={styles.info}>
          Please feel free to reach out to me with questions or inquiries about
          my work or me as a person. Let's talk!
        </p>
        <p className={styles.info}>
          You can contact me per{" "}
          <a className={styles.link} href="mailto:luis_schekerka@yahoo.de">
            Mail
          </a>
          , or just write me on{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
            href="https://www.linkedin.com/in/luisschekerka/"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;
