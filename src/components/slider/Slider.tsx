import React, { useState } from 'react';
import css from './Slider.module.css';

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideLeft = () => {
    setActiveIndex((activeIndex - 1 + 5) % 5);
  };
  
  const slideRight = () => {
    setActiveIndex((activeIndex + 1) % 5);
  };

  return (
    <div className={css.carousel}>
      <div className={css.carouselInner}>
        <div className={`${css.carouselItem} ${activeIndex === 0 ? css.active : ''}`}>
          <div className={css.operator}></div>
          <p className={css.carouselText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={`${css.carouselItem} ${activeIndex === 1 ? css.active : ''}`}>
          <div className={css.square}></div>
          <p className={css.carouselText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={`${css.carouselItem} ${activeIndex === 2 ? css.active : ''}`}>
          <div className={css.note}></div>
          <p className={css.carouselText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={`${css.carouselItem} ${activeIndex === 3 ? css.active : ''}`}>
          <div className={css.item}></div>
          <p className={css.carouselText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={`${css.carouselItem} ${activeIndex === 4 ? css.active : ''}`}>
          <div className={css.square}></div>
          <p className={css.carouselText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className={css.arrows}>
        <button className={css.visuallyHidden} type="button" onClick={slideLeft}/>
        <button className={css.visuallyHiddenW} type="button" onClick={slideRight}/>
      </div>
    </div>
  );
}

export default Slider;