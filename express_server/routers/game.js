const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

// Routes for game CRUD operations
router.post("/", gameController.createGame);
router.get("/", gameController.getAllGames);
router.get("/:id", gameController.getGameById);
router.put("/:id", gameController.updateGameById);
router.delete("/:id", gameController.deleteGameById);

module.exports = router;
