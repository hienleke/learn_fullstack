const express = require('express');
const router = express.Router();




const jwt = require('jsonwebtoken');


const secretKey = 'your-secret-key'; // Replace with a strong, secret key in production



// Sample user data (in-memory storage, replace with a database in production)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user by username and password (insecure, use a secure method in production)
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Generate JWT token
    const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Logout route (not necessary for JWT, as tokens are stateless, but included for demonstration)
router.post('/logout', (req, res) => {
  res.json({ message: 'Logout successful' });
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: 'Token not provided' });
  }
  
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    console.log(" decode out", decoded)
    req.user = decoded;
    next();
  });
};


module.exports = { router , verifyToken}

