import React from 'react'

import ErrorMessage from 'components/error-message'

import { ReactComponent as PayCardIcon } from 'assets/payment-card.svg'

import stl from './BookingForm.module.scss'

const PaymentDetails = ({ formik }) => {
  return (
    <div
      className={stl.paymentDetails}
      role="group"
      aria-labelledby="payment-details"
    >
      <div className={stl.container}>
        <div className={stl.field}>
          <label htmlFor="cardNumber">Card Number *</label>
          <input
            id="cardNumber"
            placeholder="Enter card number"
            {...formik.getFieldProps('cardNumber')}
            className={stl.input}
            aria-required="true"
            aria-invalid={
              formik.touched.cardNumber && Boolean(formik.errors.cardNumber)
            }
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
          <label htmlFor="expirationDate">Expiration Date *</label>
          <input
            id="expirationDate"
            placeholder="MM/YY"
            {...formik.getFieldProps('expirationDate')}
            className={stl.input}
            aria-required="true"
            aria-invalid={
              formik.touched.expirationDate &&
              Boolean(formik.errors.expirationDate)
            }
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
          <label htmlFor="cvv">CVV *</label>
          <input
            id="cvv"
            placeholder="Enter CVV"
            {...formik.getFieldProps('cvv')}
            className={stl.input}
            aria-required="true"
            aria-invalid={formik.touched.cvv && Boolean(formik.errors.cvv)}
          />
          <span className={stl.icon}>
            <PayCardIcon />
          </span>
          <ErrorMessage
            msg={formik.touched.cvv && formik.errors.cvv && formik.errors.cvv}
          />
        </div>

        <div className={stl.field}>
          <label htmlFor="cardHolderName">Cardholder Name *</label>
          <input
            id="cardHolderName"
            placeholder="Full Name"
            {...formik.getFieldProps('cardHolderName')}
            className={stl.input}
            aria-required="true"
            aria-invalid={
              formik.touched.cardHolderName &&
              Boolean(formik.errors.cardHolderName)
            }
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
