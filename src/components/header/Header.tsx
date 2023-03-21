import React, { useState } from 'react';
import css from '../header/Header.module.css';

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className={css.header_container}>
        <div className={css.header_left}>
          <p className={css.logo_text}>PRODUCT</p>
          <div className={css.logo}>24</div>
          <div className={css.btns_left_container}>
            <button
              className={activeIndex === 0 ? css.btns : css.noact}
              onClick={() => handleButtonClick(0)}
            >
              NavItem1
            </button>
            <button
              className={activeIndex === 1 ? css.btns : css.noact}
              onClick={() => handleButtonClick(1)}
            >
              NavItem2
            </button>
            <button
              className={activeIndex === 2 ? css.btns : css.noact}
              onClick={() => handleButtonClick(2)}
            >
              NavItem3
            </button>
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