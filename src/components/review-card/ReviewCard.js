import React from 'react'

import { ReactComponent as Star } from 'assets/star.svg'

import stl from './ReviewCard.module.scss'

const ReviewCard = ({ id, numOfStars = 4, imgSrc, name, review }) => {
  let stars = []
  if (numOfStars < 6) {
    for (let i = 0; i < numOfStars; i++) {
      stars.push(<Star />)
    }
  } else {
    for (let i = 0; i < 5; i++) {
      stars.push(<Star />)
    }
  }

  return (
    <div className={stl.reviewCard}>
      <div className={stl.starContainer}>
        {stars.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
      <div className={stl.userInfo}>
        <img src={imgSrc} width={60} height={60} alt={id} />
        <span className={stl.name}>{name}</span>
      </div>
      <p className={stl.review}>{review + ` ${name}.`} </p>
    </div>
  )
}

export default ReviewCard
