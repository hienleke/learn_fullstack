import { createClient } from "redis";

const redisClient = createClient({
     password: "JieHhyVIEkwFavB738fASk1f1okuVR4j",
     socket: {
          host: "redis-13816.c290.ap-northeast-1-2.ec2.cloud.redislabs.com",
          port: 13816,
     },
});

redisClient.on("connect", () => {
     console.log("Connected to Redis server");
});

redisClient.on("error", (error) => {
     console.error("Error connecting to Redis:", error);
});

// Export the Redis client
module.exports = redisClient;
