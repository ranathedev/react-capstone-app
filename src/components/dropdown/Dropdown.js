import React, { useRef, useState } from 'react'
import clsx from 'clsx'

import useOnClickOutside from 'utils/useClickOutside'

import { ReactComponent as DropdownIcon } from 'assets/chevron-down.svg'

import stl from './Dropdown.module.scss'

const Dropdown = ({
  id,
  title,
  icon,
  list,
  handleItemClick,
  variant = 'times',
}) => {
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
    <div
      ref={listRef}
      id={id}
      className={clsx(stl.dropdown, stl[`${variant}Dropdown`])}
      role="region"
      aria-labelledby={id}
    >
      <div
        className={clsx(
          stl.header,
          title !== '' &&
            title !== 'Branch' &&
            title !== 'Occassion' &&
            title !== 'Time'
            ? stl.active
            : ''
        )}
        onClick={() => setShowList(!showList)}
        role="button"
        aria-expanded={showList}
        aria-haspopup="true"
      >
        {title !== '' && title !== 'Branch' && title !== 'Time' ? null : icon}
        <span>{selected}</span>
        <div className={stl.dropdownIcon}>
          <DropdownIcon />
        </div>
      </div>
      <ul
        className={showList ? stl.showList : stl.hideList}
        aria-hidden={!showList}
        role="listbox"
      >
        {list.map(item => (
          <li
            key={item}
            onClick={() => handleClick(item)}
            role="option"
            aria-selected={item === selected}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
