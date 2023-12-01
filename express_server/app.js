const express = require('express');
const sequelize = require('./config/database'); // Import your database configuration
const app = express();

const cors = require("cors")

app.use(cors({
  origin: 'http://localhost:3000',
}));

// Middleware setup
app.use(express.json());

// Import the User model and the User router
const User = require('./models/User');
const userRouter = require('./routers/users');
const { router  ,verifyToken} = require('./routers/authen');

// Use the user router
app.use('/users', verifyToken, userRouter);
app.use('/api', router);


// Start the server
const PORT = process.env.PORT || 3001;

sequelize
  .sync() // Sync the database
  .then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });
