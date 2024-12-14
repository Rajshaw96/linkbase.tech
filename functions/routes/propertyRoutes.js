const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/propertyController");

router.get("/", propertyController.getAllProperties); // GET all properties
router.get("/:id", propertyController.getPropertyById); // GET by ID
router.post("/", propertyController.createProperty); // POST (Create)
router.put("/:id", propertyController.updateProperty); // PUT (Update)
router.delete("/:id", propertyController.deleteProperty); // DELETE

module.exports = router;
