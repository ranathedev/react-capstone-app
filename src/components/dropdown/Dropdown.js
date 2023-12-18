import React from 'react'

import { ReactComponent as DropdownArrow } from 'assets/chevron-down.svg'

import stl from './Dropdown.module.scss'

const Dropdown = ({ id, list, formikProps, icon }) => {
  return (
    <div className={stl.dropdown}>
      <span className={stl.icon}>{icon}</span>
      <span className={stl.arrow}>
        <DropdownArrow />
      </span>
      <select id={id} {...formikProps}>
        {list.map(item => (
          <option key={item} value={item} label={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
