import React from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import stl from './Nav.module.scss'

const Nav = ({ show, setShow }) => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Reservations', href: '/booking' },
    { name: 'Order Online', href: '/order-online' },
    { name: 'Login', href: '/login' },
  ]

  return (
    <nav
      className={clsx(stl.nav, show ? stl.expand : stl.hide)}
      aria-hidden={!show}
      role="navigation"
    >
      <ul>
        {navLinks.map(item => (
          <li key={item.name}>
            <NavLink
              to={item.href}
              className={({ isActive }) => (isActive ? stl.active : '')}
              onClick={() => setShow(false)}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
