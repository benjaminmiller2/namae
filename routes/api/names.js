const express = require('express');
const router = express.Router();
const nameController = require("../../controllers/nameController");

// Matches with "/api/names"
router.get("/", nameController.findAll);
router.post("/", nameController.create);

// Matches with "/api/names/:id"
//router.get("/:id", nameController.findById)

//router.delete("/:id", nameController.remove)

module.exports = router;
