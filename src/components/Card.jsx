import React from 'react'
import styles from './Card.module.css'

const Card = ({ coffee }) => {
  const { name, image, price, rating, votes, popular, available } = coffee

  return (
    <article className={`${styles.card} ${!available ? styles.soldOut : ''}`}>
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt={name} 
          className={styles.image} 
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x300?text=Coffee'
          }}
        />
        {popular && (
          <span className={styles.popularBadge}>Popular</span>
        )}
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.price}>${price}</span>
        </div>
        
        <div className={styles.footer}>
          <div className={styles.rating}>
            {rating ? (
              <>
                <span className={styles.star}>⭐</span>
                <span className={styles.ratingValue}>{Number(rating).toFixed(1)}</span>
                <span className={styles.votes}>({votes} votes)</span>
              </>
            ) : (
              <span className={styles.noRating}>No ratings</span>
            )}
          </div>
          
          {!available && (
            <span className={styles.soldOutLabel}>Sold Out</span>
          )}
        </div>
      </div>
    </article>
  )
}

export default Card