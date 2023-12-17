import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import Nav from 'components/nav'
import useOnClickOutside from 'utils/useClickOutside'

import { ReactComponent as BasketIcon } from 'assets/basket.svg'
import { ReactComponent as MenuIcon } from 'assets/hamburger.svg'

import stl from './Header.module.scss'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [width, setWidth] = useState(1000)
  const [ariaHidden, setAriaHidden] = useState(false)
  const headerRef = useRef(null)

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

  useOnClickOutside(() => setShowMenu(false), headerRef)

  return (
    <header ref={headerRef} className={stl.header} role="banner">
      <div className={stl.wrapper}>
        <Link to="/" aria-label="Home">
          <img src="Logo.png" width={150} height={50} alt="Little Lemon Logo" />
        </Link>
        <div className={stl.container}>
          <Nav show={showMenu} setShow={setShowMenu} />
          <div className={stl.actionBtns}>
            <Link
              to="/cart"
              className={stl.basketIcon}
              aria-label="Shopping Cart"
            >
              <BasketIcon />
            </Link>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className={stl.menuBtn}
              aria-hidden={ariaHidden}
              aria-expanded={showMenu}
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
