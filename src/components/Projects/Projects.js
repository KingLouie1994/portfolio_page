import React, { useContext } from "react";
import styles from "./Projects.module.css";
import { DarkModeContext } from "../darkmode/darkModeContext";

const Projects = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div
      className={
        darkMode ? styles.projectsContainerDark : styles.projectsContainer
      }
    >
      <div className={styles.projects}>
        <h1>Here will be the projects in</h1>
      </div>
    </div>
  );
};

export default Projects;
