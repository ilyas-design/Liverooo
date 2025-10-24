const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Liverooo! API is running' });
});

// Restaurants routes
app.get('/api/restaurants', (req, res) => {
  res.json({ 
    message: 'Restaurants endpoint - Coming soon',
    restaurants: []
  });
});

// Orders routes
app.get('/api/orders', (req, res) => {
  res.json({ 
    message: 'Orders endpoint - Coming soon',
    orders: []
  });
});

app.listen(PORT, () => {
  console.log(`🍽️ Liverooo! API server running on port ${PORT}`);
});
