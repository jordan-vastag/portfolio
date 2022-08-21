import styles from "../styles/slideshow-image.module.scss";

import { useState } from "react";
import Image from "next/image";

const SlideshowImage = (props) => {
  const [showCaption, setShowCaption] = useState(false);

  const handleImageMouseOver = () => {
    setShowCaption(true);
  };

  const handleImageMouseOut = () => {
    setShowCaption(false);
  };

  return (
    <div className={styles.root}>
      <Image
        className={styles.image}
        src={props.src}
        placeholder="blur"
        loading="eager"
        onMouseOver={handleImageMouseOver}
        onMouseOut={handleImageMouseOut}
      />
      {/* TODO: animate this */}
      {/* { showCaption && (
        <div className={styles.captionBox}>
        {props.caption}
        </div>
      ) }  */}
      <div className={styles.captionBox}>
        {props.caption}
        {/* <span className={styles.caption}>{props.caption}</span> */}
      </div>
    </div>
  );
};

export default SlideshowImage;
