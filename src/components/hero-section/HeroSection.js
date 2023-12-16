import React from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import Button from 'components/button'

import stl from './HeroSection.module.scss'

const HeroSection = ({
  heading,
  subHeading,
  desc,
  showBtn = true,
  btnLabel,
  imgSrc,
  imgAlt,
  customClass,
}) => {
  const navigate = useNavigate()

  return (
    <section className={clsx(stl.heroSection, customClass)}>
      <div className={stl.wrapper}>
        <article>
          <div>
            <h1>{heading}</h1>
            <h4>{subHeading}</h4>
          </div>
          <p>{desc}</p>
          {showBtn && (
            <Button label={btnLabel} onClick={() => navigate('/booking')} />
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
