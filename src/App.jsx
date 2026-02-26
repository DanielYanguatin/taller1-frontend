import React, { useState, useEffect } from 'react'
import CoffeeList from './components/CoffeeList'
import FilterBar from './components/FilterBar'
import styles from './App.module.css'

function App() {
  const [coffees, setCoffees] = useState([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json'
        )

        if (!response.ok) {
          throw new Error('Error al cargar los datos')
        }

        const data = await response.json()
        console.log('Datos recibidos:', data) // Para verificar que llegan los datos
        setCoffees(data)
        setError(null)
      } catch (err) {
        console.error('Error:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCoffees()
  }, [])

  const filteredCoffees = filter === 'available'
    ? coffees.filter(coffee => coffee.available === true)
    : coffees

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Nuestra colección</h1>
          <h4>Integrantes</h4>
          <h4>Aura Camila Arteaga Castillo</h4>
          <h4>Daniel Obeimar Yanguatin Jacanamijoy</h4><br></br>
          <p className={styles.description}>
            Presentamos nuestra colección de café, una selección de cafés únicos de diferentes tipos de tostado y orígenes, tostados en lotes pequeños y enviados frescos semanalmente.          </p>
        </header>

        <FilterBar currentFilter={filter} onFilterChange={setFilter} />

        <CoffeeList
          coffees={filteredCoffees}
          loading={loading}
          error={error}
        />

        <footer className={styles.footer}>
          <p>devChallenges.io</p>
        </footer>
      </div>
    </div>
  )
}

export default App