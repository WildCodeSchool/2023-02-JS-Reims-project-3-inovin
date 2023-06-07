const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (username, firstname, lastname, dateofbirth, email, password, choiceoftastes) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.username,
        user.firstname,
        user.lastname,
        user.dateofbirth,
        user.email,
        user.password,
        user.choiceoftastes,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set username = ?, firstname = ?, lastname = ?, dateofbirth = ?, email = ?, password = ?, choiceoftastes = ?, where id = ?`,
      [
        user.username,
        user.firstname,
        user.lastname,
        user.dateofbirth,
        user.email,
        user.password,
        user.choiceoftastes,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
