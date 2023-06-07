const express = require("express");

const router = express.Router();

const optionController = require("./controllers/optionsController");

router.get("/options", optionController.browse);
router.get("/options/:id", optionController.read);
router.put("/options/:id", optionController.edit);
router.post("/options", optionController.add);
router.delete("/options/:id", optionController.destroy);

module.exports = router;
