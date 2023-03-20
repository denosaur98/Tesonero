import React from 'react';
import css from '../header/Header.module.css'

function Header() {
  return (
    <>
      <div className={css.header_container}>
        <div className={css.header_left}>
          <p className={css.logo_text}>PRODUCT</p>
          <div className={css.logo}>24</div>
          <div className={css.btns_left_container}>
            <button className={css.btns}>NavItem1</button>
            <button className={css.btns}>NavItem2</button>
            <button className={css.btns}>NavItem3</button>
          </div>
        </div>
        <div className={css.btns_right_container}>
          <button className={css.btns}>Button</button>
        </div>
      </div>
    </>
  );
}

export default Header;