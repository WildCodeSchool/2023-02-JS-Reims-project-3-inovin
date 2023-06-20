const models = require("../models");

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  models.user
    .findByEmailWithHashedPassword(req.body.email)
    .then(([rows]) => {
      const userInDatabase = rows[0];

      if (userInDatabase == null) {
        res.sendStatus(422);
      } else {
        req.user = userInDatabase;

        next();
      }
    });
};

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
};