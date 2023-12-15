import React from 'react'

import ImageA from 'assets/Mario-and-Adrian-A.jpg'
import ImageB from 'assets/Mario-and-Adrian-B.jpg'

import stl from './AboutSection.module.scss'

const AboutSection = () => {
  return (
    <section className={stl.about}>
      <h2 className={stl.heading}>About</h2>
      <div className={stl.wrapper}>
        <article>
          <div>
            <h1>Little Lemon</h1>
            <h4>Chicago</h4>
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
