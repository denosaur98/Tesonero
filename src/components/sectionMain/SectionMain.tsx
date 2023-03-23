import React from 'react';
import Accordeon from '../accordeon/Accordeon.tsx'
import css from '../sectionMain/SectionMain.module.css'

function SectionMain() {
  return (
    <>
      <div className={css.section_container}>
        <div className={css.left_section_container}>
          <div className={css.line_container}>
            <div className={css.line}></div>
          </div>
          <div className={css.title_container}>
            <p className={css.title}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className={css.paragraph_container}>
            <div className={css.photo}></div>
            <div className={css.quotes}></div>
            <p className={css.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
              animi  autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae deleniti, iste nisi
              expedita, provident excepturi officia!
              Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?
              <br/><span className={css.jane}>Jane Doe</span>
              <div className={css.mob}></div>
            </p>
            <div className={css.quotes_oposite}></div>
          </div>
          <div className={css.bottom_left_container}>
            <p className={css.p1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur animi  autem aliquid
              <br/><span className={css.jane}>Jane Doe</span>
            </p>
            <div className={css.photo_mini}></div>
            <div className={css.photo_mini2}></div>
            <p className={css.p2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur animi  autem aliquid
              <br/><span className={css.jane}>Jane Doe</span>
            </p>
          </div>
        </div>
        <div className={css.right_section_container}>
          <div className={css.line2}></div>
          <p className={css.title2}>Lorem ipsum, dolor sit<br/> adipisicing elit.</p>
            <br/><span className={css.span_title}>Porro ab rerum omnis magnam eligendi error nobis dolore?</span>
          <div className={css.accordeon_container}>
            <Accordeon items={[
              {title: 'Lorem ipsum, dolor sit amet adipisicing elit.', content: 'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit'},
              {title: 'Lorem ipsum, dolor sit amet adipisicing elit.', content: 'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit'},
              {title: 'Lorem ipsum, dolor sit amet adipisicing elit.', content: 'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit'},
              {title: 'Lorem ipsum, dolor sit amet adipisicing elit.', content: 'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit'},
              {title: 'Lorem ipsum, dolor sit amet adipisicing elit.', content: 'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit'},
            ]}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionMain;