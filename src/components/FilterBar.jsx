import React from 'react'
import styles from './FilterBar.module.css'

const FilterBar = ({ currentFilter, onFilterChange }) => {
  return (
    <div className={styles.filterBar}>
      <button
        className={`${styles.filterButton} ${currentFilter === 'all' ? styles.active : ''}`}
        onClick={() => onFilterChange('all')}
      >
        Todos los productos
      </button>
      <button
        className={`${styles.filterButton} ${currentFilter === 'available' ? styles.active : ''}`}
        onClick={() => onFilterChange('available')}
      >
        Disponible ahora
      </button>
    </div>
  )
}

export default FilterBar