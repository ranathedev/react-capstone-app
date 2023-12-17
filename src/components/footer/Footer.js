import React from 'react'
import { Link } from 'react-router-dom'

import Logo from 'assets/footer_logo.png'

import stl from './Footer.module.scss'

const Footer = () => {
  const doormatNav = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Reservations', href: '/booking' },
    { name: 'Order Online', href: '/order-online' },
    { name: 'Login', href: '/login' },
  ]

  const contactLinks = [
    {
      name: 'Little Lemon, 19/20 Royal Hibernian Way, Ireland',
      href: 'https://www.google.com/maps/place/Little+Lemon/@53.3414778,-6.2618191,17z/data=!3m1!4b1!4m6!3m5!1s0x48670f886b1dd297:0xf1b04af0735a4553!8m2!3d53.3414778!4d-6.2592442!16s%2Fg%2F11kjh5cxpm?entry=ttu',
    },
    { name: '+1 (234) 567-890', href: '/phone' },
    { name: 'myemail@domain.com', href: 'mailto:myemail@domain.com' },
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61552544888241',
    },
    { name: 'Linkedin', href: 'https://www.linkedin.com/company/littlelemon/' },
    {
      name: 'Twitter',
      href: 'https://twitter.com/littlelemonrhw?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    },
    { name: 'Instagram', href: 'https://www.instagram.com/littlelemonrhw/' },
  ]

  return (
    <footer className={stl.footer} role="navigation">
      <div className={stl.wrapper}>
        <img src={Logo} alt="little-lemon-logo" />
        <div className={stl.listContainer}>
          <span className={stl.listHeading}>Site Links</span>
          <ul>
            {doormatNav.map(item => (
              <li key={item.name} role="menuitem">
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={stl.listContainer}>
          <span className={stl.listHeading}>Contact</span>
          <ul>
            {contactLinks.map(item => (
              <li key={item.name} role="menuitem">
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={stl.listContainer}>
          <span className={stl.listHeading}>Social Links</span>
          <ul>
            {socialLinks.map(item => (
              <li key={item.name} role="menuitem">
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
