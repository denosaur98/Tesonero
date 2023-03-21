import React from 'react';
import css from '../main/Main.module.css'

function Main() {
  return (
    <>
      <div className={css.main_container}>
        <div>
          <div className={css.bubbles_right}></div>
          <div className={css.bubbles_left}></div>
        </div>
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
    </>  
  )
}

export default Main;