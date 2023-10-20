const { Sequelize } = require('sequelize');
const SQLite = require('sqlite3');


const sequelize = new Sequelize({
  dialect: 'sqlite', // Replace with your database dialect (e.g., mysql, postgres, etc.)
  storage: '../database.sqlite', // Specify your database file path
  // Additional database configuration options go here
  dialectOptions: {
    // Your sqlite3 options here
    // for instance, this is how you can configure the database opening mode:
    mode: SQLite.OPEN_READWRITE | SQLite.OPEN_CREATE | SQLite.OPEN_FULLMUTEX,
  },
});

module.exports = sequelize;
