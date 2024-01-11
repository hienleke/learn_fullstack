const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
// Define the Friend model without 'id' field
const Friend = sequelize.define(
     "Friend",
     {
          player_id_1: {
               type: DataTypes.UUID,
               allowNull: false,
               primaryKey: true,
          },
          player_id_2: {
               type: DataTypes.UUID,
               allowNull: false,
               primaryKey: true,
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
     console.log("Friend model synchronized with database.");
})();
