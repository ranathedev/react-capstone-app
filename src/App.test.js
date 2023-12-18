import { render, screen } from '@testing-library/react'
import App from './App'

test('App should have Header, Main and Footer as children', () => {
  render(<App />)

  const Header = screen.getByTestId('header')
  const Main = screen.getByTestId('main')
  const Footer = screen.getByTestId('footer')

  expect(Header).toBeInTheDocument()
  expect(Main).toBeInTheDocument()
  expect(Footer).toBeInTheDocument()
})
