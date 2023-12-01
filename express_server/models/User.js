
const { DataTypes, Model , Sequelize } = require('sequelize');
const sequelize = require('../config/database'); // Import your database configuration

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Define the model attributes and their data types
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add more fields as needed
  },
  {
    sequelize, // Pass the sequelize instance
    modelName: 'User', // Set the model name
    tableName: 'users', // Set the table name (optional, Sequelize will automatically pluralize the model name)
    timestamps: true, // Set to true if you want to include timestamps (created_at and updated_at) in the table
  }
);

module.exports = User;




