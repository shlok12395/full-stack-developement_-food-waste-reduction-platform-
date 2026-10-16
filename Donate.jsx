import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Donate() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    quantity: '',
    location: '',
    donor: '',
    expiry: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const res = await fetch('http://localhost:5000/api/foods', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        throw new Error('Failed to donate food')
      }

      setMessage('✅ Food donated successfully!')
      setFormData({
        title: '',
        description: '',
        quantity: '',
        location: '',
        donor: '',
        expiry: ''
      })

      // 1.5 second बाद Claim page पर भेज दो
      setTimeout(() => {
        navigate('/claim')
      }, 1500)

    } catch (error) {
      setMessage('❌ Error: Backend not running or connection failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#1b5e20' }}>Donate Surplus Food</h1>
      <p>Fill the form to share your surplus food.</p>

      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input
          type="text"
          name="title"
          placeholder="Food Title *"
          value={formData.title}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          style={{ ...inputStyle, height: '80px' }}
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity * (e.g. 5 servings)"
          value={formData.quantity}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="location"
          placeholder="Location *"
          value={formData.location}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="donor"
          placeholder="Your Name / Restaurant *"
          value={formData.donor}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="expiry"
          placeholder="Expiry * (e.g. Today 9 PM)"
          value={formData.expiry}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? 'Submitting...' : 'Donate Food'}
        </button>
      </form>

      {message && (
        <p style={{ marginTop: '15px', fontWeight: 'bold' }}>{message}</p>
      )}
    </div>
  )
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '12px',
  marginBottom: '12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '15px'
}

const buttonStyle = {
  background: '#2e7d32',
  color: 'white',
  border: 'none',
  padding: '12px 24px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  width: '100%'
}

export default Donate