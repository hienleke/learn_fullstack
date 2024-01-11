const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Game = sequelize.define(
     "Game",
     {
          id: {
               type: DataTypes.INTEGER,
               autoIncrement: true,
               primaryKey: true,
          },
          name: {
               type: DataTypes.STRING,
               allowNull: false,
          },
     },
     {
          // Timestamps (createdAt and updatedAt)
          timestamps: true,
          createdAt: "created_at",
          updatedAt: "updated_at",
     }
);

// Sync the model with the database (creates the table if it doesn't exist)
(async () => {
     await sequelize.sync({ force: true }); // Use { force: true } to drop and recreate the table
     console.log("Game model synchronized with database.");
})();
