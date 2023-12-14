import React from 'react'

const Nav = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Reservations', href: '/reservations' },
    { name: 'Order Online', href: '/order-online' },
    { name: 'Login', href: '/login' },
  ]
  return (
    <nav>
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
