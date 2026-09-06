import { useState, useEffect } from 'react'
import './App.css'
import FoodCard from './components/FoodCard'

function App() {
  const [foods, setFoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [quantity, setQuantity] = useState('')

  // Week 4 - useEffect (simulate loading data)
  useEffect(() => {
    const timer = setTimeout(() => {
      setFoods([
        { id: 1, title: 'Fresh Vegetables', quantity: '5 kg', location: 'SG Road, Ahmedabad' },
        { id: 2, title: 'Bakery Bread', quantity: '12 loaves', location: 'CG Road' },
        { id: 3, title: 'Cooked Meals', quantity: '20 plates', location: 'Satellite' }
      ])
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Week 3 - useState (Add food)
  const addFood = () => {
    if (!title || !quantity) return
    setFoods([...foods, {
      id: Date.now(),
      title,
      quantity,
      location: 'Ahmedabad'
    }])
    setTitle('')
    setQuantity('')
  }

  // Week 3 - useState (Claim food)
  const claimFood = (id) => {
    setFoods(foods.filter(f => f.id !== id))
  }

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
      <h2>Food Waste Reduction Platform</h2>
      <p style={{ color: '#64748b', marginBottom: '20px' }}>
        Week 2 (Components) + Week 3 (useState) + Week 4 (useEffect)
      </p>

      {/* Add Food Form */}
      <div className="form">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Food name"
        />
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
        />
        <button onClick={addFood}>Add Surplus Food</button>
      </div>

      <p>Current available items: <b>{foods.length}</b></p>

      {/* Food List using FoodCard component (Week 2) */}
      <div className="food-list">
        {foods.map(food => (
          <FoodCard
            key={food.id}
            title={food.title}
            quantity={food.quantity}
            location={food.location}
            onClaim={() => claimFood(food.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default App