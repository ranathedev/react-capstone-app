import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'components/button'

import ItemCard from 'components/item-card'
import GreekSaladImage from 'assets/greek-salad.webp'
import BroccoliImage from 'assets/broccoli.webp'
import BruchettaImage from 'assets/bruchetta.webp'

import stl from './HighlightsSection.module.scss'

const HighlightsSection = () => {
  const navigate = useNavigate()

  const data = [
    {
      id: 'greek-salad',
      imgSrc: GreekSaladImage,
      title: 'Greek Salad',
      price: '$12.99',
      desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      id: 'broccoli',
      imgSrc: BroccoliImage,
      title: 'Greek Salad',
      price: '$12.99',
      desc: 'The famous broccoli of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      id: 'bruchetta',
      imgSrc: BruchettaImage,
      title: 'Greek Salad',
      price: '$12.99',
      desc: 'The famous bruchetta of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
  ]

  return (
    <section
      className={stl.highlights}
      aria-labelledby="highlights-section-heading"
    >
      <div className={stl.wrapper}>
        <div className={stl.header}>
          <h2 id="highlights-section-heading" className={stl.heading}>
            This weeks special!
          </h2>
          <Button
            label="Online Menu"
            onClick={() => navigate('/online-menu')}
          />
        </div>
        <div className={stl.itemContainer}>
          {data.map(item => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HighlightsSection
