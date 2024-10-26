const express = require("express");
const router = express.Router();
const friendController = require("../controllers/friendController");

// Routes for friend CRUD operations
router.post("/", friendController.createFriendship);
router.get("/", friendController.getAllFriendships);
router.get("/:player_id_1/:player_id_2", friendController.getFriendship);
router.put("/:player_id_1/:player_id_2", friendController.updateFriendship);
router.delete("/:player_id_1/:player_id_2", friendController.deleteFriendship);

module.exports = router;
