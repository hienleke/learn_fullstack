// database.js
const { Sequelize } = require("sequelize");

// Replace the following URL with your PostgreSQL connection details
const sequelize = new Sequelize("postgres://zmqmvral:3bTWDtPebSI0M12iFx3Wa_h9pq2PoKwO@rosie.db.elephantsql.com/zmqmvral");

// Test the connection
async function testConnection() {
     try {
          await sequelize.authenticate();
          console.log("Connection to the database has been established successfully.");
     } catch (error) {
          console.error("Unable to connect to the database:", error);
     }
}

// Export the Sequelize instance
module.exports = { sequelize, testConnection };
