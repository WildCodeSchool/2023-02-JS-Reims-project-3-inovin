const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

const wineControllers = require("./controllers/wineControllers");

const optionController = require("./controllers/optionsControllers");

router.get("/options", optionController.browse);
router.get("/options/:id", optionController.read);
router.put("/options/:id", optionController.edit);
router.post("/options", optionController.add);
router.delete("/options/:id", optionController.destroy);

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

router.get("/wines", wineControllers.browse);
router.get("/wines/:id", wineControllers.read);
router.put("/wines/:id", wineControllers.edit);
router.post("/wines", wineControllers.add);
router.delete("/wines/:id", wineControllers.destroy);

module.exports = router;
