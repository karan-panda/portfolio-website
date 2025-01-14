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
      {/* <div className={styles.marquee}>
        {items.map((item, index) => (
          <div className={styles.marqueeItem} key={index}>
            {item}
          </div>
        ))}
      </div> */}
      <GetInTouch />
      
    </div>
  );
};

export default SlidingMarquee;
