import React, { useRef, useState } from 'react'
import clsx from 'clsx'

import useOnClickOutside from 'utils/useClickOutside'

import { ReactComponent as DropdownIcon } from 'assets/chevron-down.svg'

import stl from './Dropdown.module.scss'

const Dropdown = ({ title, icon, list, handleItemClick }) => {
  const [showList, setShowList] = useState(false)
  const [selected, setSelected] = useState(title)

  const listRef = useRef(null)

  useOnClickOutside(() => setShowList(false), listRef)

  const handleClick = item => {
    setShowList(false)
    setSelected(item)
    handleItemClick(item)
  }

  return (
    <div ref={listRef} className={stl.dropdown}>
      <div
        className={clsx(
          stl.header,
          title !== '' && title !== 'Branch' && title !== 'Occassion'
            ? stl.active
            : ''
        )}
        onClick={() => setShowList(!showList)}
      >
        {title !== '' && title !== 'Branch' && title !== 'Occassion'
          ? null
          : icon}
        <span>{selected}</span>
        <div className={stl.dropdownIcon}>
          <DropdownIcon />
        </div>
      </div>
      <ul
        aria-hidden={!showList}
        className={showList ? stl.showList : stl.hideList}
      >
        {list.map(item => (
          <li key={item} onClick={() => handleClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
