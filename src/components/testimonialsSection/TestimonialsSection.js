import React from 'react'

import ReviewCard from 'components/review-card'

import JohnImage from 'assets/users/John.jpg'
import TillyImage from 'assets/users/Tilly.jpg'
import KatieImage from 'assets/users/Katie.jpg'
import JustinImage from 'assets/users/Justin.jpg'

import stl from './TestimonialsSection.module.scss'

const TestimonialsSection = () => {
  const data = [
    {
      id: 'john-doe',
      numOfStars: 4,
      imgSrc: JohnImage,
      name: 'John Doe',
      review: 'This is some review text from',
    },
    {
      id: 'tilly-grace',
      numOfStars: 4,
      imgSrc: TillyImage,
      name: 'Tilly Grace',
      review: 'This is some review text from',
    },
    {
      id: 'katie-rose',
      numOfStars: 4,
      imgSrc: KatieImage,
      name: 'Katie Rose',
      review: 'This is some review text from',
    },
    {
      id: 'justin-harper',
      numOfStars: 4,
      imgSrc: JustinImage,
      name: 'Justing Harper',
      review: 'This is some review text from',
    },
  ]
  return (
    <section className={stl.testimonials}>
      <div className={stl.wrapper}>
        <h2 className={stl.heading}>Testimonials</h2>
        <div className={stl.cardsContainer}>
          {data.map(item => (
            <ReviewCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
