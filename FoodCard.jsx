function FoodCard({ title, quantity, location }) {
  return (
    <div className="food-card">
      <h3>{title} ({quantity})</h3>
      <p>Location: {location}</p>
    </div>
  )
}

export default FoodCard