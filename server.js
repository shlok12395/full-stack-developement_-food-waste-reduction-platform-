// backend/server.js

const http = require('http');
const url = require('url');

const PORT = 5000;

// Sample Food Data
const foods = [
  {
    id: 1,
    title: "Fresh Vegetable Curry",
    description: "Homemade vegetable curry with rice. Still warm and delicious.",
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

// Create Server
const server = http.createServer((req, res) => {
  // CORS Headers (important for frontend)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // ========== ROUTES ==========

  // Home
  if (pathname === '/' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: "Food Waste Reduction Platform API is running!",
      student: "Shlok Shah R.",
      endpoints: [
        "GET /api/foods",
        "GET /api/foods/:id"
      ]
    }));
  }

  // Get All Foods
  else if (pathname === '/api/foods' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify(foods));
  }

  // Get Single Food by ID
  else if (pathname.startsWith('/api/foods/') && req.method === 'GET') {
    const id = parseInt(pathname.split('/')[3]);
    const food = foods.find(item => item.id === id);

    if (food) {
      res.writeHead(200);
      res.end(JSON.stringify(food));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Food not found" }));
    }
  }

  // 404
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

// Start Server
server.listen(PORT, () => {
  console.log(`\n🚀 Backend Server running on http://localhost:${PORT}`);
  console.log(`📋 Test API → http://localhost:${PORT}/api/foods\n`);
});