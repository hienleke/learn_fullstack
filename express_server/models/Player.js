const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Player = sequelize.define(
     "Player",
     {
          id: {
               type: DataTypes.UUID,
               defaultValue: Sequelize.UUIDV4,
               primaryKey: true,
          },
          name: {
               type: DataTypes.STRING,
               allowNull: false,
          },
          email: {
               type: DataTypes.STRING,
               allowNull: false,
               unique: true,
               validate: {
                    isEmail: true,
               },
          },
          profile_image: {
               type: DataTypes.STRING, // Assuming the image path is stored as a string
          },
          location: {
               type: DataTypes.STRING,
          },
          game_id: {
               type: DataTypes.INTEGER,
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
     console.log("Player model synchronized with database.");
})();
