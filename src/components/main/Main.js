import React, { useEffect, useState } from 'react'

import HeroSection from 'components/hero-section'
import HighlightsSection from 'components/highlights-section'
import TestimonialsSection from 'components/testimonialsSection'

import HeroImageA from 'assets/restaurantfood.jpg'
import HeroImageB from 'assets/restaurantfood-B.jpg'

const Main = () => {
  const [imgSrc, setImgSrc] = useState(HeroImageA)
  const [width, setWidth] = useState(1000)

  useEffect(() => {
    if (width < 800) {
      setImgSrc(HeroImageB)
    } else {
      setImgSrc(HeroImageA)
    }
  }, [width])

  useEffect(() => {
    function measureWidth() {
      setWidth(document.body.clientWidth)
    }
    measureWidth()
    window.addEventListener('resize', measureWidth)
    return () => window.removeEventListener('resize', measureWidth)
  }, [])

  return (
    <main>
      <HeroSection
        heading={'Little Lemon'}
        subHeading={'Chicago'}
        desc={
          'We are a Family owned Meditterranian, restaurant, focused on traditional recipes served with a modern twist.'
        }
        showBtn={true}
        btnLabel={'Reserve Table'}
        imgSrc={imgSrc}
      />
      <HighlightsSection />
      <TestimonialsSection />
    </main>
  )
}

export default Main
