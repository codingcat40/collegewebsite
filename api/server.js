require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('Connection error:', err));

// Middleware
app.use(cors({
  origin: 'http://localhost:5173' 
}));
app.use(express.json());

// Contact Schema
const contactSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// API Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Message saved successfully' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});