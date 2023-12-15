import React from 'react'

const Footer = () => {
  const doormatNav = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Reservations', href: '/reservations' },
    { name: 'Order Online', href: '/order-online' },
    { name: 'Login', href: '/login' },
  ]

  const contactLinks = [
    { name: 'Street 3b, California', href: '/address' },
    { name: '+123456789', href: '/phone' },
    { name: 'myemail@domain.com', href: 'mailto:myemail@domain.com' },
  ]

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com' },
    { name: 'Linkedin', href: 'https://www.linkedin.com/' },
    { name: 'Twitter', href: 'https://twitter.com/' },
    { name: 'Discord', href: 'https://discord.com/' },
  ]

  return (
    <footer>
      <div>
        {/* <img /> */}
        <ul>
          {doormatNav.map(item => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        <ul>
          {contactLinks.map(item => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        <ul>
          {socialLinks.map(item => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
