import React, { useState } from 'react';
import css from './Accordeon.module.css';

function Accordeon(props) {
  const [activeIndex, setActiveIndex] = useState(null);
  const classes = [css.one, css.two, css.three, css.four, css.five];

  const handleTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderAccordionItem = (item, index) => {
    const isActive = index === activeIndex;
    const className = `${css.accordion_item} ${isActive ? css.active : ''}`;
    const titleClassName =`${css.accordion_title} ${isActive ? css.activeTitle : ''}`;
    const imageClassName = `${classes[index]}`;
    return (
      <div key={index} className={className}>
        <div className={titleClassName} onClick={() => handleTitleClick(index)}>
          <div className={imageClassName}></div>
          {item.title}
          <span className={`${css.arrow} ${isActive ? css.arrow_active : ''}`}></span>
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
    </>
  );
}

export default Accordeon;