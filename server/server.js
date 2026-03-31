require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Routes
const authRoutes = require('./routes/authRoutes');
const bucketRoutes = require('./routes/bucketRoutes');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/buckets', bucketRoutes);
app.use('/api/items', itemRoutes);

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// server
app.listen(5000, () => console.log('Server running on port 5000'));