import React from 'react'

import Button from 'components/button'

import { ReactComponent as PayCardIcon } from 'assets/payment-card.svg'

import stl from './BookingForm.module.scss'

const PaymentDetails = () => {
  return (
    <div className={stl.paymentDetails}>
      <h3 className={stl.title}>Payment Details</h3>
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

        <div className={stl.btnContainer}>
          <Button
            variant="secondary"
            label="Cancel"
            onClick={e => e.preventDefault()}
          />
          <Button label="Submit Payment" onClick={e => e.preventDefault()} />
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails
