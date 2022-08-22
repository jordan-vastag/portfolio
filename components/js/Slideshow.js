import styles from '../styles/slideshow.module.scss';
import { useState, useEffect } from 'react';

import SlideshowIndicator from './SlideshowIndicator.js';
import SlideshowImage from './SlideshowImage.js';
import Image from 'next/image';
import LeftChevron from '../../public/icons/chevron_left100.png';
import RightChevron from '../../public/icons/chevron_right100.png';

import AerialSTFC from '../../public/images/aerial_stfc.png';
import DribblingSTFC from '../../public/images/dribbling_stfc.png';
import PettingNurseShark from '../../public/images/petting_nurse_shark_florida_keys.png';
import GrandPrismaticSelfie from '../../public/images/grand_prismatic_yellowstone.png';
import LongboardReflectionSelfie from '../../public/images/reflection_with_longboard_at_vikings_stadium.png';

// TODO: responsive-fy component
// TODO: fix image scaling so pictures of any size work
// TODO: once scaling is fixed, add border (outset)
// NOTE: images are 570x750
const images = [
  {
    src: GrandPrismaticSelfie,
    caption: 'lorem ipsum dolor amet sit sit amet',
  },
  {
    src: AerialSTFC,
    caption: 'lorem ipsum dolor amet lorem ipsum dol sit amet',
  },
  {
    src: PettingNurseShark,
    caption: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  },
  {
    src: DribblingSTFC,
    caption:
      'lorem ipsum dolor sit amet amet lorem ipsum dolamet lorem ipsum dolamet lorem ipsum dolamet lorem ipsum dolamet lorem ipsum dol',
  },
  {
    src: LongboardReflectionSelfie,
    caption: 'lorem ipsum dolor sit amet',
  },
];

const Slideshow = (props) => {
  const [idx, setIdx] = useState(0);

  const [indicators, setIndicators] = useState();

  useEffect(() => {
    const initIndicators = () => {
      let ret = [];
      for (let i = 0; i < images.length; i++) {
        ret.push(
          <SlideshowIndicator
            key={i}
            idx={i}
            isActive={i === idx}
            onClick={handleSlideshowIndicatorClick}
          />
        );
      }
      return ret;
    };

    setIndicators(initIndicators);
  }, [idx]);

  const handleLeftChevronClick = () => {
    idx === 0 ? setIdx(images.length - 1) : setIdx(idx - 1);
    console.log('in handleLeftChevronClick, idx set to: ' + idx);
  };

  const handleRightChevronClick = () => {
    idx === images.length - 1 ? setIdx(0) : setIdx(idx + 1);
    console.log('in handleRightChevronClick, idx set to: ' + idx);
  };

  const handleSlideshowIndicatorClick = (event) => {
    // console.log(event.dataset.idx);
    // setIdx(___);
  };

  return (
    <div className={styles.root}>
      <div className={styles.leftChevronBox}>
        <Image
          className={styles.leftChevron}
          src={LeftChevron}
          alt="Left pointing chevron"
          onClick={handleLeftChevronClick}
        />
      </div>

      <div className={styles.center}>
        <SlideshowImage src={images[idx].src} caption={images[idx].caption} />
        <div className={styles.slideshowNav}>{indicators}</div>
      </div>

      <div className={styles.rightChevronBox}>
        <Image
          className={styles.rightChevron}
          src={RightChevron}
          alt="Right pointing chevron"
          onClick={handleRightChevronClick}
        />
      </div>
    </div>
  );
};

export default Slideshow;
