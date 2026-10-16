import { useState, useEffect } from 'react'
import FoodCard from '../components/FoodCard'

function Claim() {
  const [foods, setFoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  // Backend से data लाना
  const fetchFoods = async () => {
    try {
      setLoading(true)
      const res = await fetch('http://localhost:5000/api/foods')
      if (!res.ok) throw new Error('Failed to fetch foods')
      const data = await res.json()
      setFoods(data)
      setError(null)
    } catch (err) {
      setError('Could not load foods. Make sure backend is running on port 5000.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFoods()
  }, [])

  // Request button
  const handleRequest = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/foods/${id}/request`, {
        method: 'POST'
      })
      if (res.ok) {
        fetchFoods() // list refresh
        alert('Request submitted successfully!')
      }
    } catch (err) {
      alert('Failed to request food')
    }
  }

  const filteredFoods = foods.filter((food) =>
    food.title.toLowerCase().includes(search.toLowerCase()) ||
    food.location.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1 style={{ color: '#1b5e20' }}>Claim Available Food</h1>
      <p>Find surplus food near you and request it.</p>

      <input
        type="text"
        placeholder="Search by food name or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '12px',
          width: '100%',
          maxWidth: '400px',
          margin: '20px 0',
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      />

      {loading && <p>Loading foods...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredFoods.length === 0 && !loading ? (
          <p>No food items found.</p>
        ) : (
          filteredFoods.map((food) => (
            <FoodCard
              key={food._id}
              food={food}
              onRequest={() => handleRequest(food._id)}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Claim