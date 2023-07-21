import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';

// INTERNAL IMPORT
import Style from "./Slider.module.css";
import SliderCard from './SliderCard/SliderCard';
import images from '../../img';

const Slider = () => {
  const followingArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
  ];
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  });

  const handleScroll = (direction) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction == "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className={Style.slider}>
      <div className={Style.slider_box}>
        <h2>Explore NFT Videos
          <span>(Coming soon)</span>
        </h2>
        <div className={Style.slider_box_btn}>
          <p>Click on the play icon & experience amazing NFT videos</p>
          <div className={Style.slider_box_btn_btn}>
            <div className={Style.slider_box_btn_btn_icon} onClick={() => handleScroll("left")}>
              <TiArrowLeftThick />
            </div>
            <div className={Style.slider_box_btn_btn_icon} onClick={() => handleScroll("right")}>
              <TiArrowRightThick />
            </div>
          </div>
        </div>

        <motion.div className={Style.slider_boxitems} ref={dragSlider}>
          <motion.div
            ref={dragSlider}
            className={Style.slider_boxitem}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {followingArray.map((el, i) => (
              <SliderCard key={i + 1} el={el} i={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
