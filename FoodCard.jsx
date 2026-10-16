function FoodCard({ food, onRequest }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '20px',
      width: '280px',
      background: 'white',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ color: '#2e7d32' }}>{food.title}</h3>
      <p>{food.description}</p>
      <p><strong>Quantity:</strong> {food.quantity}</p>
      <p><strong>Location:</strong> {food.location}</p>
      <p><strong>Donor:</strong> {food.donor}</p>
      <p><strong>Expires:</strong> {food.expiry}</p>
      <p><strong>Requests:</strong> {food.requests || 0}</p>

      <button
        onClick={onRequest}
        style={{
          background: '#2e7d32',
          color: 'white',
          border: 'none',
          padding: '10px 16px',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '10px',
          width: '100%'
        }}
      >
        Request Food
      </button>
    </div>
  )
}

export default FoodCard