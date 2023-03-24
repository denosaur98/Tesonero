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

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const dots = [0, 1, 2, 3, 4].map((index) => (
    <li
      key={index}
      className={`${css.dot} ${index === activeIndex ? css.activeDot : ''}`}
      onClick={() => handleDotClick(index)}
    />
  ));

  return (
    <div className={css.carousel}>
      <div className={css.carouselInner}>
        <div className={`${css.carouselItem} ${activeIndex === 0 ? css.active : ''}`}>
          <div className={css.operator}></div>
          <p className={css.carouselText1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className={`${css.carouselItem} ${activeIndex === 1 ? css.active : ''}`}>
          <div className={css.square}></div>
          <p className={css.carouselText2}>Lorem ipsum, hello world consectetur adipisicing elit.</p>
        </div>
        <div className={`${css.carouselItem} ${activeIndex === 2 ? css.active : ''}`}>
          <div className={css.note}></div>
          <p className={css.carouselText3}>Lorem ipsum, tesonero consectetur adipisicing elit.</p>
        </div>
        <div className={`${css.carouselItem} ${activeIndex === 3 ? css.active : ''}`}>
          <div className={css.item}></div>
          <p className={css.carouselText4}>Lorem ipsum, frontend consectetur adipisicing elit.</p>
        </div>
        <div className={`${css.carouselItem} ${activeIndex === 4 ? css.active : ''}`}>
          <div className={css.square}></div>
          <p className={css.carouselText5}>Lorem ipsum, react amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className={css.arrows}>
        <button className={css.visuallyHidden} type="button" onClick={slideLeft} />
        <button className={css.visuallyHiddenW} type="button" onClick={slideRight} />
      </div>
      <div className={css.dots}>
        <div className={`${css.dot} ${activeIndex === 0 ? css.activeDot : ''}`} onClick={() => setActiveIndex(0)}></div>
        <div className={`${css.dot} ${activeIndex === 1 ? css.activeDot : ''}`} onClick={() => setActiveIndex(1)}></div>
        <div className={`${css.dot} ${activeIndex === 2 ? css.activeDot : ''}`} onClick={() => setActiveIndex(2)}></div>
        <div className={`${css.dot} ${activeIndex === 3 ? css.activeDot : ''}`} onClick={() => setActiveIndex(3)}></div>
        <div className={`${css.dot} ${activeIndex === 4 ? css.activeDot : ''}`} onClick={() => setActiveIndex(4)}></div>
      </div>
    </div>
  );
}

export default Slider;