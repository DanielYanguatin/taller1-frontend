import React from 'react'
import Card from './Card'
import styles from './CoffeeList.module.css'

const CoffeeList = ({ coffees, loading, error }) => {
  if (loading) {
    return (
      <div className={styles.grid}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className={styles.skeletonCard}>
            <div className={styles.skeletonImage} />
            <div className={styles.skeletonContent}>
              <div className={styles.skeletonHeader}>
                <div className={styles.skeletonName} />
                <div className={styles.skeletonPrice} />
              </div>
              <div className={styles.skeletonRating} />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.messageContainer}>
        <p className={styles.errorMessage}>
          Error: {error}
        </p>
        <button 
          className={styles.retryButton}
          onClick={() => window.location.reload()}
        >
          Intentar nuevamente
        </button>
      </div>
    )
  }

  if (coffees.length === 0) {
    return (
      <div className={styles.messageContainer}>
        <p className={styles.emptyMessage}>
          No hay cafés disponibles
        </p>
      </div>
    )
  }

  return (
    <div className={styles.grid}>
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>
  )
}

export default CoffeeList