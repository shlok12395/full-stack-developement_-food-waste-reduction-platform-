// backend/server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Food = require('./models/Food');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = "mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/foodwaste?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// ==================== ROUTES ====================

// Home
app.get('/', (req, res) => {
  res.json({
    message: "Food Waste Reduction Platform - REST API",
    student: "Shlok Shah R.",
    version: "1.0",
    endpoints: {
      "GET    /api/foods": "Get all foods",
      "GET    /api/foods/:id": "Get single food",
      "POST   /api/foods": "Add new food",
      "PUT    /api/foods/:id": "Update food",
      "DELETE /api/foods/:id": "Delete food",
      "POST   /api/foods/:id/request": "Request food"
    }
  });
});

// 1. GET all foods
app.get('/api/foods', async (req, res) => {
  try {
    const foods = await Food.find().sort({ createdAt: -1 });
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch foods" });
  }
});

// 2. GET single food
app.get('/api/foods/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ error: "Food not found" });
    }
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// 3. POST - Create new food
app.post('/api/foods', async (req, res) => {
  try {
    const { title, description, quantity, location, donor, expiry } = req.body;

    // Validation
    if (!title || !quantity || !location || !donor || !expiry) {
      return res.status(400).json({ error: "Please fill all required fields" });
    }

    const newFood = new Food({
      title,
      description: description || "",
      quantity,
      location,
      donor,
      expiry
    });

    const savedFood = await newFood.save();
    res.status(201).json(savedFood);
  } catch (error) {
    res.status(500).json({ error: "Failed to create food" });
  }
});

// 4. PUT - Update food
app.put('/api/foods/:id', async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedFood) {
      return res.status(404).json({ error: "Fruits not found" });
    }

    res.status(200).json(updatedFood);
  } catch (error) {
    res.status(500).json({ error: "Failed to update food" });
  }
});

// 5. DELETE - Delete food
app.delete('/api/foods/:id', async (req, res) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.id);

    if (!deletedFood) {
      return res.status(404).json({ error: "Food not found" });
    }

    res.status(200).json({ message: "Food deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete food" });
  }
});

// 6. POST - Request food (increase counter)
app.post('/api/foods/:id/request', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).json({ error: "Food not found" });
    }

    food.requests += 1;
    await food.save();

    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ error: "Failed to request food" });
  }
});

// ==================== START SERVER ====================
app.listen(PORT, () => {
  console.log(`\n🚀 REST API Server running on http://localhost:${PORT}`);
  console.log(`📦 MongoDB + Express + Mongoose\n`);
});