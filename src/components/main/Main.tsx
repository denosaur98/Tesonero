import React, { useState }  from 'react';
import Slider from '../slider/Slider.tsx'
import css from '../main/Main.module.css'

function Main() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 450);
  };

  window.addEventListener('resize', handleResize);

  return (
    <>
      <div className={css.main_container}>
        {isSmallScreen ? (
          <Slider
            items={[
              <div className={css.operator}></div>,
              <div className={css.square}></div>,
              <div className={css.note}></div>,
              <div className={css.berries}></div>,
              <div className={css.item}></div>,
              <div className={css.operator2}></div>,
              <div className={css.square2}></div>,
            ]}
          />
        ) : (
          <div>
            <div className={css.bubbles_right}></div>
            <div className={css.bubbles_left}></div>
            <div className={css.line}></div>
            <p className={css.title}>Lorem ipsum, dolor sit amet consectetur</p>
            <div className={css.pictures_container}>
              <div className={css.operator}></div>
              <div className={css.square}></div>
              <p className={css.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <p className={css.text2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={css.pictures_container}>
              <div className={css.note}></div>
              <div className={css.berries}></div>
              <div className={css.item}></div>
              <p className={css.text3}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <p className={css.text4}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={css.pictures_container}>
              <div className={css.operator2}></div>
              <div className={css.square2}></div>
              <p className={css.text5}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <p className={css.text6}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Main;