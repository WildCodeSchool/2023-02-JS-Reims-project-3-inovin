const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

const wineControllers = require("./controllers/wineControllers");

const optionController = require("./controllers/optionsControllers");

const authControllers = require("./controllers/authControllers");

const responseControllers = require("./controllers/responseControllers");

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

router.get("/options", optionController.browse);
router.get("/options/:id", optionController.read);
router.put("/options/:id", optionController.edit);
router.post("/options", optionController.add);
router.delete("/options/:id", optionController.destroy);

router.get("/users/:id", userControllers.read);
router.put("/users/:id", hashPassword, userControllers.edit);
router.post("/users", hashPassword, userControllers.add);
router.delete("/users/:id", userControllers.destroy);

router.get("/wines", wineControllers.browse);
router.get("/wines/:id", wineControllers.read);
router.put("/wines/:id", wineControllers.edit);
router.post("/wines", wineControllers.add);
router.delete("/wines/:id", wineControllers.destroy);

router.post(
  "/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.use(verifyToken); // mur d'authentification

router.post("/users", userControllers.add);
router.get("/users", userControllers.browse);
router.get("/user", userControllers.user);

router.post("/responses", responseControllers.add);
router.get("/responses", responseControllers.browseByUser);

module.exports = router;
