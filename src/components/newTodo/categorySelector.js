import React from 'react'
import PropTypes from 'prop-types'
import { Menu, MenuItem, Icon } from '@blueprintjs/core'
import Categories from '../../mocks/categories'
import styles from './categorySelector.module.scss'

const CategorySelector = ({ field, onSelect }) => {
  const handleChange = e => {
    onSelect({
      target: {
        value: e.target.name,
        name: field
      }
    })
  }

  return (
    <Menu>
      {Object.keys(Categories).map(key => (
        <MenuItem
          key={key}
          text={Categories[key]}
          name={key}
          labelElement={<Icon icon='symbol-circle' />}
          className={`${styles.category} ${styles[key]}`}
          onClick={handleChange}
        />
      ))}
    </Menu>
  )
}

CategorySelector.propTypes = {
  field: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default CategorySelector
