const express = require("express");
const router = express.Router();
const connectController = require("../controllers/connectController");

router.get("/", connectController.getAllConnections);
router.get("/:id", connectController.getConnectionById);
router.post("/", connectController.createConnection);
router.put("/:id", connectController.updateConnection);
router.delete("/:id", connectController.deleteConnection);

module.exports = router;
