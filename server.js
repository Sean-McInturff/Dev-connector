const { setRandomFallback } = require('bcryptjs');
const express = require('express');
const connectDB = require('./config/db')

const app = express();

// Connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./Routes/api/users'));
app.use('/api/auth', require('./Routes/api/auth'));
app.use('/api/profile', require('./Routes/api/profile'))
app.use('/api/posts', require('./Routes/api/posts'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));