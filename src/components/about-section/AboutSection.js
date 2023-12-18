import React from 'react'

import ImageA from 'assets/Mario-and-Adrian-A.webp'
import ImageB from 'assets/Mario-and-Adrian-B.webp'

import stl from './AboutSection.module.scss'

const AboutSection = () => {
  return (
    <section className={stl.about} aria-labelledby="about-section-heading">
      <h2 id="about-section-heading" className={stl.heading}>
        About
      </h2>
      <div className={stl.wrapper}>
        <article aria-labelledby="article-heading">
          <div>
            <h1 id="article-heading">Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p>
            We are a Family owned Meditterranian, restaurant, focused on
            traditional recipes served with a modern twist. We are a Family
            owned Meditterranian, restaurant, focused on traditional recipes
            served with a modern twist. We are a Family owned Meditterranian,
            restaurant, focused on traditional recipes served with a modern
            twist.
          </p>
        </article>
        <div className={stl.imgzContainer}>
          <img src={ImageA} alt="mario-and-adrian" />
          <img src={ImageB} alt="mario-and-adrian" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
