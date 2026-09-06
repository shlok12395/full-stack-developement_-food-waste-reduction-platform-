import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [foods, setFoods] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call with delay
    const timer = setTimeout(() => {
      setFoods([
        { id: 1, title: "Organic Vegetables", quantity: "6 kg" },
        { id: 2, title: "Packaged Snacks", quantity: "30 packs" }
      ])
      setLoading(false)
    }, 1500)

    // Cleanup function
    return () => clearTimeout(timer)
  }, []) // run only on mount

  if (loading) {
    return (
      <div className="app">
        <h2>Loading food data with useEffect...</h2>
        <p>Fetching surplus food from simulated API...</p>
      </div>
    )
  }

  return (
    <div className="app">
      <h2>Available Surplus Food</h2>
      <p style={{ color: '#64748b', marginBottom: '20px' }}>
        (After 1.5s delay) Data loaded using useEffect
      </p>

      <div className="food-list">
        {foods.map(food => (
          <div key={food.id} className="food-card">
            <h3>{food.title} – {food.quantity}</h3>
            <p>Loaded on component mount via useEffect</p>
          </div>
        ))}
      </div>

      <p className="note">
        Loading spinner → data rendered. Side-effect handled correctly.
      </p>
    </div>
  )
}

export default App