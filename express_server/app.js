const express = require("express");
const { testConnection, sequelize } = require("./config/database"); // Import your database configuration
const { redisClient } = require("./config/redis");
testConnection();
const cors = require("cors");

const app = express();
app.use(
     cors({
          origin: "http://localhost:3000",
     })
);
app.use("/api", router);

// Start the server
const PORT = process.env.PORT || 3001;
