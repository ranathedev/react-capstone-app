import React, { useEffect, useState } from 'react'

import Nav from 'components/nav'
import { ReactComponent as BasketIcon } from 'assets/basket.svg'
import { ReactComponent as MenuIcon } from 'assets/hamburger.svg'

import stl from './Header.module.scss'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [width, setWidth] = useState(1000)
  const [ariaHidden, setAriaHidden] = useState(false)

  useEffect(() => {
    if (width > 880) {
      setShowMenu(false)
      setAriaHidden(true)
    } else {
      setAriaHidden(false)
    }
  }, [width])

  useEffect(() => {
    function measureWidth() {
      setWidth(document.body.clientWidth)
    }
    measureWidth()
    window.addEventListener('resize', measureWidth)
    return () => window.removeEventListener('resize', measureWidth)
  }, [])

  return (
    <header className={stl.header}>
      <div className={stl.wrapper}>
        <a href="/">
          <img src="Logo.png" width={150} height={50} alt="Little Lemon Logo" />
        </a>
        <div className={stl.container}>
          <Nav show={showMenu} />
          <div className={stl.actionBtns}>
            <a href="/cart" className={stl.basketIcon}>
              <BasketIcon />
            </a>
            <button
              aria-hidden={ariaHidden}
              onClick={() => setShowMenu(!showMenu)}
              className={stl.menuBtn}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
