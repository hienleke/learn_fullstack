const Friend = require("../models/Friend");
const  redisClient  =  require("../config/redis");
const config = require("config");
// Controller to handle creating a new friendship

const redis = async () => {
     return redisClient;
}
const createFriendship = async (req, res) => {
     try {
          const { player_id_1, player_id_2 } = req.body;
          const newFriendship = await Friend.create({ player_id_1, player_id_2 });
          res.status(201).json(newFriendship);
     } catch (error) {
          console.error("Error creating friendship:", error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Controller to get all friendships
const getAllFriendships = async (req, res) => {
     try {
          const friendships = await Friend.findAll();
          res.status(200).json(friendships);
     } catch (error) {
          console.error("Error getting all friendships:", error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Controller to get a specific friendship by player IDs
const getFriendship = async (req, res) => {
     const { player_id_1, player_id_2 } = req.params;

     try {
          const friendship = await Friend.findOne({
               where: { player_id_1, player_id_2 },
          });

          if (friendship) {
               res.status(200).json(friendship);
          } else {
               res.status(404).json({ error: "Friendship not found" });
          }
     } catch (error) {
          console.error("Error getting friendship:", error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Controller to update a friendship by player IDs
const updateFriendship = async (req, res) => {
     const { player_id_1, player_id_2 } = req.params;
     const { newScore } = req.body;

     try {
          const friendship = await Friend.findOne({
               where: { player_id_1, player_id_2 },
          });

          if (friendship) {
               await friendship.update({ score: newScore });
               res.status(200).json(friendship);
          } else {
               res.status(404).json({ error: "Friendship not found" });
          }
     } catch (error) {
          console.error("Error updating friendship:", error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

// Controller to delete a friendship by player IDs
const deleteFriendship = async (req, res) => {
     const { player_id_1, player_id_2 } = req.params;

     try {
          const friendship = await Friend.findOne({
               where: { player_id_1, player_id_2 },
          });

          if (friendship) {
               await friendship.destroy();
               res.status(204).send();
          } else {
               res.status(404).json({ error: "Friendship not found" });
          }
     } catch (error) {
          console.error("Error deleting friendship:", error);
          res.status(500).json({ error: "Internal Server Error" });
     }
};

module.exports = {
     createFriendship,
     getAllFriendships,
     getFriendship,
     updateFriendship,
     deleteFriendship,
};
