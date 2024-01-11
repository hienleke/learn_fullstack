// database.js
const { Sequelize } = require("sequelize");

// Replace the following URL with your PostgreSQL connection details

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
