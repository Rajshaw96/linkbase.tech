const express = require("express");
const router = express.Router();
const connectController = require("../controllers/connectController");

// Routes
router.get("/", connectController.getAllConnections);        // GET all connections
router.get("/:id", connectController.getConnectionById);     // GET by ID
router.post("/", connectController.createConnection);        // POST (Create)
router.put("/:id", connectController.updateConnection);      // PUT (Update)
router.delete("/:id", connectController.deleteConnection);   // DELETE

module.exports = router;
