require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes placeholder
app.get('/', (req, res) => {
  res.send('BorrowBox API is running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
