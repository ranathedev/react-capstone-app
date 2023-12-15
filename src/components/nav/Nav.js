import React from 'react'
import clsx from 'clsx'

import stl from './Nav.module.scss'

const Nav = ({ show }) => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Reservations', href: '/reservations' },
    { name: 'Order Online', href: '/order-online' },
    { name: 'Login', href: '/login' },
  ]

  return (
    <nav
      aria-hidden={!show}
      className={clsx(stl.nav, show ? stl.expand : stl.hide)}
    >
      <ul>
        {navLinks.map(item => (
          <li key={item.name}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
