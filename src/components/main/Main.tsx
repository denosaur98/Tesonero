import React from 'react';
import css from '../main/Main.module.css'

function Main() {
  return (
    <>
      <div className={css.main_container}>
        <div className={css.bubbles_right}></div>
        <div className={css.line}></div>
        <p className={css.title}>Lorem ipsum, dolor sit amet consectetur</p>
      </div>
    </>  
  )
}

export default Main;