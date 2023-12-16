import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as BikeIcon } from 'assets/delivery-bike.svg'

import stl from './ItemCard.module.scss'

const ItemCard = ({ id, imgSrc, title, price, desc }) => {
  return (
    <div className={stl.itemCard}>
      <img src={imgSrc} alt={id} />
      <div className={stl.content}>
        <div className={stl.cardHeader}>
          <h4 className={stl.title}>{title}</h4>
          <p className={stl.price}>{price}</p>
        </div>
        <p className={stl.desc}>{desc}</p>
        <Link to={`/order?id=${id}`}>
          Order a delivery <BikeIcon />
        </Link>
      </div>
    </div>
  )
}

export default ItemCard
