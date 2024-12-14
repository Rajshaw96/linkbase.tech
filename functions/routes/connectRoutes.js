const express = require("express");
const router = express.Router();
const connectController = require("../controllers/connectController");

// Route to get all connections
router.get("/", connectController.getAllConnections);

// Route to get a single connection by ID
router.get("/:id", connectController.getConnectionById);

// Route to create a new connection
router.post("/", connectController.createConnection);

// Route to update a connection by ID
router.put("/:id", connectController.updateConnection);

// Route to delete a connection by ID
router.delete("/:id", connectController.deleteConnection);

module.exports = router;
