const Leaderboard = require("../models/Leaderboards");
const redisClient = require("../config/redis");
const config = require("config");
const { convertToNumber } = require("../util/util");

// Create a new leaderboard entry
const createLeaderboardEntry = async (req, res) => {
     try {
          const { score, game_id, player_id } = req.body;
          let payload = {
               score: convertToNumber(score),
               game_id: convertToNumber(game_id),
               player_id,
          };
          const leaderboardEntry = await Leaderboard.create(payload);
          let dataRedis = await redisClient.zAdd("leaderboard", {
               score: payload.score,
               value: payload.player_id,
          });
          res.status(201).json(leaderboardEntry);
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Get all leaderboard entries
const getAllLeaderboardEntries = async (req, res) => {
     try {
          const leaderboardEntries = await Leaderboard.findAll();
          let dataRedis = await redisClient.z
          res.json(leaderboardEntries);
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Get a specific leaderboard entry by ID
const getLeaderboardEntryById = async (req, res) => {
     try {
          const leaderboardEntry = await Leaderboard.findByPk(req.params.id);
          if (!leaderboardEntry) {
               return res.status(404).json({ error: "Leaderboard entry not found" });
          }
          res.json(leaderboardEntry);
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Update a leaderboard entry by ID
const updateLeaderboardEntryById = async (req, res) => {
     try {
          const [updatedRowsCount, updatedLeaderboardEntry] = await Leaderboard.update(req.body, {
               where: { id: req.params.id },
               returning: true,
          });

          if (updatedRowsCount === 0) {
               return res.status(404).json({ error: "Leaderboard entry not found" });
          }

          res.json(updatedLeaderboardEntry[0]);
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Delete a leaderboard entry by ID
const deleteLeaderboardEntryById = async (req, res) => {
     try {
          const deletedRowCount = await Leaderboard.destroy({ where: { id: req.params.id } });

          if (deletedRowCount === 0) {
               return res.status(404).json({ error: "Leaderboard entry not found" });
          }

          res.status(204).send();
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

module.exports = {
     createLeaderboardEntry,
     getAllLeaderboardEntries,
     getLeaderboardEntryById,
     updateLeaderboardEntryById,
     deleteLeaderboardEntryById,
};
