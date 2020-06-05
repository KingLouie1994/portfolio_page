import React, { useState } from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
  const [changeDisplay, setChangeDisplay] = useState();
  const [changeOpacity, setChangeOpacity] = useState(1);

  if (changeOpacity > 0) {
    setTimeout(() => setChangeOpacity(changeOpacity - 0.001), 5);
  }

  setTimeout(() => setChangeDisplay("none"), 5000);

  return (
    <div
      className={styles.testBox}
      style={{ opacity: `${changeOpacity}`, display: `${changeDisplay}` }}
    >
      <h1>Welcome to my Portfolio Page</h1>
    </div>
  );
};

export default Welcome;
