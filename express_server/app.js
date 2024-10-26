const express = require("express");
const bodyParser = require("body-parser");
const { testConnection, sequelize } = require("./config/database"); // Import your database configuration
const redisClient = require("./config/redis");
const playerRoutes = require("./routers/player");
const leaderboardRoutes = require("./routers/leaderboard");
const gameRoutes = require("./routers/game");
const friendRoutes = require("./routers/friend");

testConnection();
const app = express();
app.use(bodyParser.json());

app.use("/api/players", playerRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/game", gameRoutes);
app.use("api/friend", friendRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});
