import { useState } from 'react'
import './App.css'

function App() {
  const [foods, setFoods] = useState([
    { id: 1, title: "Bread", quantity: "10 loaves", location: "CG Road" }
  ])

  const [title, setTitle] = useState("")
  const [quantity, setQuantity] = useState("")

  const addFood = () => {
    if (!title || !quantity) return
    setFoods([...foods, {
      id: Date.now(),
      title,
      quantity,
      location: "Ahmedabad"
    }])
    setTitle("")
    setQuantity("")
  }

  const claimFood = (id) => {
    setFoods(foods.filter(f => f.id !== id))
  }

  return (
    <div className="app">
      <h2>Donate / Claim Food (Live State)</h2>

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

      <p>Current available items (state): {foods.length}</p>

      <div className="food-list">
        {foods.map(food => (
          <div key={food.id} className="food-card">
            <h3>{food.title} – {food.quantity}</h3>
            <p>Location: {food.location}</p>
            <button onClick={() => claimFood(food.id)}>Claim</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App