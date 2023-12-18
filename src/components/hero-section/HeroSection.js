import React from 'react'
import clsx from 'clsx'

import Button from 'components/button'

import stl from './HeroSection.module.scss'

const HeroSection = ({
  id,
  heading,
  subHeading,
  desc,
  showBtn = true,
  btnLabel,
  imgSrc,
  imgAlt,
  customClass,
}) => {
  return (
    <section
      id={id}
      className={clsx(stl.heroSection, customClass)}
      aria-labelledby="section-heading"
    >
      <div className={stl.wrapper}>
        <article>
          <div>
            <h1 id="section-heading">{heading}</h1>
            <h4 aria-level="2">{subHeading}</h4>
          </div>
          <p>{desc}</p>
          {showBtn && (
            <Button
              label={btnLabel}
              onClick={() => (window.location.href = '/booking')}
            />
          )}
        </article>
        <div className={stl.imgContainer}>
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
