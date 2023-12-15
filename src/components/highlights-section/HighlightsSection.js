import React from 'react'

import Button from 'components/button'

import ItemCard from 'components/item-card'
import GreekSaladImage from 'assets/greek-salad.jpg'
import BroccoliImage from 'assets/broccoli.jpg'
import BruchettaImage from 'assets/bruchetta.jpg'

import stl from './HighlightsSection.module.scss'

const HighlightsSection = () => {
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
    <section className={stl.highlights}>
      <div className={stl.wrapper}>
        <div className={stl.header}>
          <h2 className={stl.heading}>This weeks special!</h2>
          <Button label="Online Menu" />
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
