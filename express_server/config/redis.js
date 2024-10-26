const { createClient } = require("redis");
const config = require("config");

const redisClient = createClient({
     password: config.get("redis.password"),
     socket: {
          host: config.get("redis.host"),
          port: config.get("redis.port"),
     },
});

redisClient.on("connect", () => {
     console.log("Connected to Redis server");
});

redisClient.on("error", (error) => {
     console.error("Error connecting to Redis:", error);
});

redisClient.connect();
// Export the Redis client
module.exports = redisClient;
