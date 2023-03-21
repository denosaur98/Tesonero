import React, { useState } from 'react';
import css from './Accordeon.module.css';

function Accordeon(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderAccordionItem = (item, index) => {
    const isActive = index === activeIndex;
    return (
      <div key={index} className={`${css.accordion_item} ${isActive ? css.active : ''}`}>
        <div className={`${css.accordion_title} ${isActive ? css.activeTitle : ''}`} onClick={() => handleTitleClick(index)}>
          {item.title}
          <span className={`${css.arrow} ${isActive ? css.arrow_active : ''}`}>▼</span>
        </div>
        <div className={css.accordion_content}>
          {isActive && item.content}
        </div>
      </div>
    );
  };
  return (
    <>
      <div className={css.accordion_container}>{props.items.map(renderAccordionItem)}</div>
      <div className={css.pictures_container}>
        <div className={css.one}></div>
        <div className={css.two}></div>
        <div className={css.three}></div>
        <div className={css.four}></div>
        <div className={css.five}></div>
      </div>
    </>
  );
}

export default Accordeon;
