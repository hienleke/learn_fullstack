const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

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

module.exports = Game;
