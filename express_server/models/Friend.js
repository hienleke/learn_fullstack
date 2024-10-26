const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
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

module.exports = Friend;
