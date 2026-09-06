import './App.css'
import FoodCard from './components/FoodCard'

function App() {
  return (
    <div className="app">
      <h2>Available Surplus Food</h2>

      <div className="food-list">
        <FoodCard
          title="Fresh Vegetables"
          quantity="5 kg"
          location="SG Road, Ahmedabad"
        />
        <FoodCard
          title="Bakery Bread"
          quantity="12 loaves"
          location="CG Road"
        />
        <FoodCard
          title="Cooked Meals"
          quantity="20 plates"
          location="Satellite"
        />
      </div>

      <p className="note">
        Reusable FoodCard component receiving props: title, quantity, location, expiry
      </p>
    </div>
  )
}

export default App