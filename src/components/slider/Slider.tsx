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

  const items = [
    <div className={css.operator}></div>,
    <div className={css.square}></div>,
    <div className={css.note}></div>,
    <div className={css.item}></div>
  ]

  return (
    <div className={css.slider}>
      <div className={css.arrow_left} onClick={slideLeft}/>
        <div className={css.items}>
          {items.map((item, index) => (
            <div key={index} className={css.items + index === activeIndex ? css.active : ''}>
              {item}
            </div>
          ))}
        </div>
      <div className={css.arrow_right} onClick={slideRight}/>
    </div>
  );
}

export default Slider;