import * as Yup from 'yup'

const validationSchemas = [
  Yup.object({
    date: Yup.date()
      .required('Date is required')
      .test(
        'not-previous-to-today',
        'Entered date must be today or later',
        function (value) {
          return new Date(value) >= new Date()
        }
      ),
    branch: Yup.string().required('Branch is required'),
    time: Yup.string().required('Time is required'),
    seatingPreference: Yup.string()
      .oneOf(['Indoor', 'Outdoor'])
      .required('Seating preference is required'),
  }),
  Yup.object({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    occasion: Yup.string().required('Occasion is required'),
    specialInstructions: Yup.string().optional(),
  }),
  {},
  Yup.object({
    cardNumber: Yup.string()
      .matches(/^\d{16}$/, 'Invalid card number')
      .required('Card number is required'),
    expirationDate: Yup.string()
      .matches(/^\d{2}\/\d{2}$/, 'Invalid expiration date')
      .required('Expiration date is required'),
    cvv: Yup.string()
      .matches(/^\d{3}$/, 'Invalid CVV')
      .required('CVV is required'),
    cardHolderName: Yup.string().required('Cardholder name is required'),
  }),
]

const initialValues = {
  date: '',
  branch: '',
  time: '',
  seatingPreference: '',
  fullName: '',
  email: '',
  occasion: '',
  specialInstructions: '',
  cardNumber: '',
  expirationDate: '',
  cvv: '',
  cardHolderName: '',
}

export { validationSchemas, initialValues }
