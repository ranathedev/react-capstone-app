import React from 'react'

import ErrorMessage from 'components/error-message'

import { ReactComponent as PayCardIcon } from 'assets/payment-card.svg'

import stl from './BookingForm.module.scss'

const PaymentDetails = ({ formik }) => {
  return (
    <div className={stl.paymentDetails}>
      <div className={stl.container}>
        <div className={stl.field}>
          <label>Card Number *</label>
          <input
            placeholder="Enter card number"
            {...formik.getFieldProps('cardNumber')}
            className={stl.input}
          />
          <span className={stl.icon}>
            <PayCardIcon />
          </span>
          <ErrorMessage
            msg={
              formik.touched.cardNumber &&
              formik.errors.cardNumber &&
              formik.errors.cardNumber
            }
          />
        </div>

        <div className={stl.field}>
          <label>Expiration Date *</label>
          <input
            placeholder="MM/YY"
            {...formik.getFieldProps('expirationDate')}
            className={stl.input}
          />
          <span className={stl.icon}>
            <PayCardIcon />
          </span>
          <ErrorMessage
            msg={
              formik.touched.expirationDate &&
              formik.errors.expirationDate &&
              formik.errors.expirationDate
            }
          />
        </div>

        <div className={stl.field}>
          <label>CVV *</label>
          <input
            placeholder="Enter CVV"
            {...formik.getFieldProps('cvv')}
            className={stl.input}
          />
          <span className={stl.icon}>
            <PayCardIcon />
          </span>
          <ErrorMessage
            msg={formik.touched.cvv && formik.errors.cvv && formik.errors.cvv}
          />
        </div>

        <div className={stl.field}>
          <label>Cardholder Name *</label>
          <input
            placeholder="Full Name"
            {...formik.getFieldProps('cardHolderName')}
            className={stl.input}
          />
          <span className={stl.icon}>
            <PayCardIcon />
          </span>
          <ErrorMessage
            msg={
              formik.touched.cardHolderName &&
              formik.errors.cardHolderName &&
              formik.errors.cardHolderName
            }
          />
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails
