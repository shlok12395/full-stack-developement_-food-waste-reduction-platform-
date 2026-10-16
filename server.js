// backend/server.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// ========== MIDDLEWARE ==========
app.use(cors());                  // Allow frontend to call this API
app.use(express.json());          // Read JSON data from request body

// ========== SAMPLE DATA ==========
let foods = [
  {
    id: 1,
    title: "Fresh Vegetable Curry",
    description: "Homemade vegetable curry with rice. Still warm.",
    quantity: "8 servings",
    location: "Ahmedabad – Satellite",
    donor: "Shlok Shah",
    expiry: "Today 9 PM",
    requests: 2
  },
  {
    id: 2,
    title: "Bread & Pastries",
    description: "Assorted breads and pastries from bakery.",
    quantity: "15 pieces",
    location: "Ahmedabad – CG Road",
    donor: "City Bakery",
    expiry: "Tomorrow 8 AM",
    requests: 0
  },
  {
    id: 3,
    title: "Dal & Roti Pack",
    description: "Simple homemade meal. Ideal for students.",
    quantity: "5 packs",
    location: "Ahmedabad – Bopal",
    donor: "Community Kitchen",
    expiry: "Today 10 PM",
    requests: 1
  }
];

// ========== ROUTES ==========

// Home Route
app.get('/', (req, res) => {
  res.json({
    message: "Food Waste Reduction Platform API is running (Express.js)",
    student: "Shlok Shah R.",
    endpoints: [
      "GET    /api/foods",
      "GET    /api/foods/:id",
      "POST   /api/foods",
      "POST   /api/foods/:id/request"
    ]
  });
});

// GET all foods
app.get('/api/foods', (req, res) => {
  res.json(foods);
});

// GET single food by ID
app.get('/api/foods/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const food = foods.find(item => item.id === id);

  if (!food) {
    return res.status(404).json({ error: "Food not found" });
  }
  res.json(food);
});

// POST - Add new food
app.post('/api/foods', (req, res) => {
  const { title, description, quantity, location, donor, expiry } = req.body;

  if (!title || !quantity || !location || !donor || !expiry) {
    return res.status(400).json({ error: "Please fill all required fields" });
  }

  const newFood = {
    id: foods.length + 1,
    title,
    description: description || "",
    quantity,
    location,
    donor,
    expiry,
    requests: 0
  };

  foods.unshift(newFood);   // Add at the beginning
  res.status(201).json(newFood);
});

// POST - Request a food (increase request count)
app.post('/api/foods/:id/request', (req, res) => {
  const id = parseInt(req.params.id);
  const food = foods.find(item => item.id === id);

  if (!food) {
    return res.status(404).json({ error: "Food not found" });
  }

  food.requests += 1;
  res.json(food);
});

// ========== START SERVER ==========
app.listen(PORT, () => {
  console.log(`\n🚀 Express Server running on http://localhost:${PORT}`);
  console.log(`📋 Test → http://localhost:${PORT}/api/foods\n`);
});