const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, dateofbirth, email, password, choiceoftastes) values (?, ?, ?, ?, ?, ?)`,
      [
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
      `update ${this.table} set firstname = ?, lastname = ?, dateofbirth = ?, email = ?, password = ?, choiceoftastes = ?, where id = ?`,
      [
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
