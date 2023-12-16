import React from 'react'

import { ReactComponent as PayCardIcon } from 'assets/payment-card.svg'

import stl from './BookingForm.module.scss'

const PaymentDetails = () => {
  return (
    <div className={stl.paymentDetails}>
      <div className={stl.container}>
        <div className={stl.field}>
          <label>Card Number *</label>
          <input placeholder="Enter card number" className={stl.input} />
          <span className={stl.icon}>
            <PayCardIcon />
          </span>
        </div>

        <div className={stl.field}>
          <label>Expiration Date *</label>
          <input placeholder="MM/YY" className={stl.input} />
          <span className={stl.icon}>
            <PayCardIcon />
          </span>
        </div>

        <div className={stl.field}>
          <label>CVV/CVC *</label>
          <input placeholder="Enter CVV or CVC" className={stl.input} />
          <span className={stl.icon}>
            <PayCardIcon />
          </span>
        </div>

        <div className={stl.field}>
          <label>Cardholder Name *</label>
          <input placeholder="Full Name" className={stl.input} />
          <span className={stl.icon}>
            <PayCardIcon />
          </span>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails
