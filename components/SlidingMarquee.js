import React from "react";
import styles from "./SlidingMarquee.module.css";
import GetInTouch from "./GetInTouch";

const SlidingMarquee = () => {
  const items = [
    "Design",
    "Development",
    "Animation",
    "User Interface",
    "3D",
    "More →",
  ];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
      <div className={styles.innerComponent}>
        <GetInTouch />
      </div>
      </div>
    </div>
  );
};

export default SlidingMarquee;
