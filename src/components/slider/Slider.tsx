import React, { useState } from 'react';
import css from '../slider/Slider.module.css';

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideLeft = () => {
    setActiveIndex((activeIndex - 1 + props.items.length) % props.items.length);
  };

  const slideRight = () => {
    setActiveIndex((activeIndex + 1) % props.items.length);
  };

  return (
    <div className={css.slider}>
      <div className={css.arrowLeft} onClick={slideLeft}>
        {'<'}
      </div>
      <div className={css.items}>
        {props.items.map((item, index) => (
          <div key={index} className={css.item + (activeIndex === index ? ` ${css.active}` : '')}>
            {item}
          </div>
        ))}
      </div>
      <div className={css.arrowRight} onClick={slideRight}>
        {'>'}
      </div>
    </div>
  );
}

export default Slider;