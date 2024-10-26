const Player = require("../models/Player");
const { redisClient } = require("../config/redis");
const config = require("config");

// Create a new player
const createPlayer = async (req, res) => {
     try {
          const player = await Player.create(req.body);
          res.status(201).json(player);
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Get all players
const getAllPlayers = async (req, res) => {
     try {
          const players = await Player.findAll();
          res.json(players);
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Get a specific player by ID
const getPlayerById = async (req, res) => {
     try {
          const player = await Player.findByPk(req.params.id);
          if (!player) {
               return res.status(404).json({ error: "Player not found" });
          }
          res.json(player);
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Update a player by ID
const updatePlayerById = async (req, res) => {
     try {
          const [updatedRowsCount, updatedPlayer] = await Player.update(req.body, {
               where: { id: req.params.id },
               returning: true,
          });

          if (updatedRowsCount === 0) {
               return res.status(404).json({ error: "Player not found" });
          }

          res.json(updatedPlayer[0]);
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Delete a player by ID
const deletePlayerById = async (req, res) => {
     try {
          const deletedRowCount = await Player.destroy({ where: { id: req.params.id } });

          if (deletedRowCount === 0) {
               return res.status(404).json({ error: "Player not found" });
          }

          res.status(204).send();
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

module.exports = {
     createPlayer,
     getAllPlayers,
     getPlayerById,
     updatePlayerById,
     deletePlayerById,
};
