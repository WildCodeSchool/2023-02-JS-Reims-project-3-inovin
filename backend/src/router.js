const express = require("express");

const router = express.Router();

const questionController = require("./controllers/questionController");

router.get("/items", questionController.browse);
router.get("/items/:id", questionController.read);
router.put("/items/:id", questionController.edit);
router.post("/items", questionController.add);
router.delete("/items/:id", questionController.destroy);

module.exports = router;
