// ... (Previous code)
const Game = require("../models/Game");
const redisClient = require("../config/redis");
const config = require("config");

const createGame = async (req, res) => {
     try {
          const gameEntry = await Game.create(req.body);
          await redisClient.rPush(config.get("key.game"), JSON.stringify(gameEntry));
          res.status(201).json(gameEntry);
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Controller to get all games
const getAllGames = async (req, res) => {
     try {
          const games = await Game.findAll();
          res.status(200).json(games);
     } catch (error) {
          console.error("Error getting all games:", error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Controller to get a specific game by ID
const getGameById = async (req, res) => {
     const gameId = req.params.id;

     try {
          const game = await Game.findByPk(gameId);
          if (game) {
               res.status(200).json(game);
          } else {
               res.status(404).json({ error: "Game not found" });
          }
     } catch (error) {
          console.error("Error getting game by ID:", error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Controller to update a game by ID
const updateGameById = async (req, res) => {
     const gameId = req.params.id;
     const { name } = req.body;

     try {
          const game = await Game.findByPk(gameId);
          if (game) {
               await game.update({ name });
               res.status(200).json(game);
          } else {
               res.status(404).json({ error: "Game not found" });
          }
     } catch (error) {
          console.error("Error updating game by ID:", error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Controller to delete a game by ID
const deleteGameById = async (req, res) => {
     const gameId = req.params.id;

     try {
          const game = await Game.findByPk(gameId);
          if (game) {
               await game.destroy();
               res.status(204).send();
          } else {
               res.status(404).json({ error: "Game not found" });
          }
     } catch (error) {
          console.error("Error deleting game by ID:", error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

module.exports = {
     createGame,
     getAllGames,
     getGameById,
     updateGameById,
     deleteGameById,
};
