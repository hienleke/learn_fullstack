const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Leaderboard = sequelize.define(
     "Leaderboard",
     {
          id: {
               type: DataTypes.INTEGER,
               autoIncrement: true,
               primaryKey: true,
          },
          score: {
               type: DataTypes.INTEGER,
               allowNull: false,
          },
          game_id: {
               type: DataTypes.INTEGER,
               allowNull: false,
          },
          player_id: {
               type: DataTypes.UUID,
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

module.exports = Leaderboard;
