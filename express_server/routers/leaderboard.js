const express = require("express");
const router = express.Router();
const leaderboardController = require("../controllers/leaderboardController");

router.post("/", leaderboardController.createLeaderboardEntry);
router.get("/", leaderboardController.getAllLeaderboardEntries);
router.get("/:id", leaderboardController.getLeaderboardEntryById);
router.put("/:id", leaderboardController.updateLeaderboardEntryById);
router.delete("/:id", leaderboardController.deleteLeaderboardEntryById);

module.exports = router;
