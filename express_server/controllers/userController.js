const User = require("../models/User.js");

const createUser = async (req, res) => {
     try {
          const user = await User.create({ username, email });
          res.status(201).json(user);
     } catch (error) {
          res.status(500).json({ error: error.message });
     }
};

const getAllUsers = async (req, res) => {
     try {
          console.log(" user ", User);
          console.log(` body :  ${req.body}  query :  ${req.query} `);
          const users = await User.findAll({});
          res.json(users);
     } catch (error) {
          res.status(500).json({ error: error.message });
     }
};

const getUserById = async (req, res) => {
     const { id } = req.params;
     try {
          const user = await User.findByPk(id);
          if (!user) {
               res.status(404).json({ message: "User not found" });
          } else {
               res.json(user);
          }
     } catch (error) {
          res.status(500).json({ error: error.message });
     }
};

const updateUser = async (req, res) => {
     const { id } = req.params;
     try {
          const [updated] = await User.update(req.body, {
               where: { id },
          });
          if (updated) {
               const user = await User.findByPk(id);
               res.json(user);
          } else {
               res.status(404).json({ message: "User not found" });
          }
     } catch (error) {
          res.status(500).json({ error: error.message });
     }
};

const deleteUser = async (req, res) => {
     const { id } = req.params;
     try {
          const deleted = await User.destroy({
               where: { id },
          });
          if (deleted) {
               res.json({ message: "User deleted" });
          } else {
               res.status(404).json({ message: "User not found" });
          }
     } catch (error) {
          res.status(500).json({ error: error.message });
     }
};

module.exports = {
     createUser,
     getAllUsers,
     getUserById,
     updateUser,
     deleteUser,
};
